import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  locationData,
  LocationNode,
  searchLocations,
  getBreadcrumbs,
  locationMap,
} from "../data/locationData";
import styles from "./Finder.module.scss";
import { Box } from "@mui/material";
import SearchAutocomplete from "./SearchAutocomplete";
import Breadcrumbs from "./Breadcrumbs";
import ColumnView from "./ColumnView";

type ColumnIndex = 0 | 1 | 2;

const Finder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<LocationNode[]>([]);
  // Stav pre vybraný uzol a breadcrumbs
  const [selectedNode, setSelectedNode] = useState<LocationNode | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<LocationNode[]>([]);
  // Stav pre aktuálne zobrazené úrovne v stĺpcoch
  const [visibleLevels, setVisibleLevels] = useState<[number, number, number]>([
    0, 1, 2,
  ]);
  // Stav pre položky v každom stĺpci
  const [columnItems, setColumnItems] = useState<
    [LocationNode[], LocationNode[], LocationNode[]]
  >([[], [], []]);

  // Inicializácia dát pri prvom načítaní
  useEffect(() => {
    // Filtrovanie položiek pre prvý stĺpec (krajiny - úroveň 0)
    const level0Items = locationData.filter((node) => node.level === 0);
    setColumnItems([level0Items, [], []]);
  }, []);

  // Odvodenie vybraných položiek v stĺpcoch z breadcrumbs
  // Tu si pomôžeme už nastavenými breadcrumbami a nebudeme filtrovať locationData
  const selectedColumnItems = useMemo<
    [LocationNode | null, LocationNode | null, LocationNode | null]
  >(() => {
    return [
      breadcrumbs.find((node) => node.level === visibleLevels[0]) || null,
      breadcrumbs.find((node) => node.level === visibleLevels[1]) || null,
      breadcrumbs.find((node) => node.level === visibleLevels[2]) || null,
    ];
  }, [breadcrumbs, visibleLevels]);

  // Funkcia na nastavenie viditeľných úrovní na základe úrovne uzla
  const updateVisibleLevels = useCallback((node: LocationNode) => {
    // Nastavíme viditeľné úrovne tak, aby vybraný uzol bol v strednom stĺpci
    // a jeho deti v pravom stĺpci
    const nodeLevel = node.level;
    // Posúvame okno alebo zobrazujeme ďalšie okno, iba ak má uzol deti
    if (node.children.length > 0) {
      // Ak je to uzol úrovne 0 (krajina), zobrazíme iba úrovne 0 a 1
      if (nodeLevel === 0) {
        setVisibleLevels([0, 1, -1]); // Použijeme -1 pre tretí stĺpec, aby sa nezobrazil
      }
      // Ak je to uzol úrovne 1, zobrazíme úrovne 0, 1, 2
      else if (nodeLevel === 1) {
        setVisibleLevels([0, 1, 2]);
      }
      // Ak je to uzol úrovne 2, zobrazíme úrovne 1, 2, 3
      else if (nodeLevel === 2) {
        setVisibleLevels([1, 2, 3]);
      }
      // Pre vyššie úrovne posúvame okno
      else {
        const startLevel = Math.max(0, nodeLevel - 1);
        const newLevels = [startLevel, startLevel + 1, startLevel + 2];
        setVisibleLevels(newLevels as [number, number, number]);
      }
    }
    // Ak uzol nemá deti, neposúvame okno (ponecháme aktuálne viditeľné úrovne)
  }, []);

  // Hook pre aktualizáciu breadcrumbs
  useEffect(() => {
    if (selectedNode) {
      const crumbs = getBreadcrumbs(selectedNode.id);
      setBreadcrumbs(crumbs);
      // Aktualizujeme viditeľné úrovne na základe vybraného uzla
      updateVisibleLevels(selectedNode);
    } else {
      setBreadcrumbs([]);
    }
  }, [selectedNode, updateVisibleLevels]);

  // Funkcia na spracovanie vyhľadávania
  const handleSearch = useCallback((term: string) => {
    if (term.trim() === "") {
      setSearchResults([]);
      return [];
    }
    // Vykonáme vyhľadávanie
    const results = searchLocations(term, locationData);
    setSearchResults(results);
    return results;
  }, []);

  // Hook pre aktualizáciu stĺpcov na základe vybraného uzla a úrovní
  useEffect(() => {
    const newColumnItems: [LocationNode[], LocationNode[], LocationNode[]] = [
      [],
      [],
      [],
    ];

    if (!selectedNode) {
      // Ak nemáme vybraný uzol, zobrazíme len krajiny v prvom stĺpci
      newColumnItems[0] = locationData.filter((node) => node.level === 0);
    } else {
      // Naplníme stĺpce podľa viditeľných úrovní a vybraného uzla
      for (let i = 0; i < 3; i++) {
        const targetLevel = visibleLevels[i];

        if (targetLevel === selectedNode.level) {
          // Ak je úroveň stĺpca rovnaká ako úroveň vybraného uzla, zobrazíme súrodencov
          // Nájdeme rodiča vybraného uzla priamo cez parentId
          const parentId = selectedNode.parentId;
          const parentNode = parentId ? locationMap[parentId] : null;

          if (parentNode) {
            // Ak má rodiča, zobrazíme všetky jeho deti
            newColumnItems[i] = parentNode.children.filter(
              (node) => node.level === targetLevel
            );
          } else {
            // Ak nemá rodiča (je to krajina), zobrazíme všetky krajiny
            newColumnItems[i] = locationData.filter(
              (node) => node.level === targetLevel
            );
          }
        } else if (targetLevel < selectedNode.level) {
          // Ak je úroveň stĺpca nižšia ako úroveň vybraného uzla, zobrazíme predkov
          // Nájdeme predka na danej úrovni pomocou path
          const ancestorId = selectedNode.path[targetLevel];
          const ancestor = ancestorId ? locationMap[ancestorId] : null;

          if (ancestor) {
            // Ak sme našli predka, zobrazíme jeho súrodencov a to tak že zistíme jeho rodiča a zobrazíme jeho deti
            const ancestorParentId = ancestor.parentId;
            const ancestorParent = ancestorParentId
              ? locationMap[ancestorParentId]
              : null;

            if (ancestorParent) {
              // Ak má rodiča, zobrazíme jeho deti co su nasi surodenci
              newColumnItems[i] = ancestorParent.children.filter(
                (node) => node.level === targetLevel
              );
            } else if (targetLevel === 0) {
              // Ak je to úroveň 0 (krajiny), zobrazíme všetky krajiny
              newColumnItems[i] = locationData.filter(
                (node) => node.level === 0
              );
            }
          }
        } else if (targetLevel > selectedNode.level) {
          // Ak je úroveň stĺpca vyššia ako úroveň vybraného uzla, zobrazíme jeho deti
          newColumnItems[i] = selectedNode.children.filter(
            (node) => node.level === targetLevel
          );
        }
      }
    }

    setColumnItems(newColumnItems);
  }, [visibleLevels, selectedNode]);

  // Funkcia pre zmenu vyhľadávacieho výrazu
  const handleSearchTermChange = useCallback(
    (term: string) => {
      setSearchTerm(term);
      // Ak je výraz prázdny, vyčistíme výsledky
      if (term.trim() === "") {
        setSearchResults([]);
      } else {
        // Inak vykonáme vyhľadávanie
        handleSearch(term);
      }
    },
    [handleSearch]
  );

  // Funkcia pre dvojklik na položku v stĺpci
  const handleColumnDoubleClick = useCallback(
    (columnIndex: ColumnIndex, node: LocationNode) => {
      // Ak máme aktívne vyhľadávanie, zrušíme ho
      if (searchTerm.trim() !== "") {
        setSearchTerm("");
        setSearchResults([]);
      }
      // Nastavíme vybraný uzol
      setSelectedNode(node);
      // Posun stĺpcov vykonáme len ak má uzol deti
      if (node.children.length > 0) {
        // Ak sme v poslednom stĺpci a chceme posunúť zobrazenie
        if (columnIndex === (2 as ColumnIndex)) {
          // Posun úrovní tak, aby vybraný uzol bol v strednom stĺpci
          const nodeLevel = node.level;
          const newVisibleLevels: [number, number, number] = [
            Math.max(0, nodeLevel - 1),
            nodeLevel,
            nodeLevel + 1,
          ];
          setVisibleLevels(newVisibleLevels);
        }
      }
    },
    [searchTerm]
  );

  // Funkcia pre kliknutie na breadcrumb
  const handleBreadcrumbClick = useCallback(
    (node: LocationNode) => {
      // Ak máme aktívne vyhľadávanie, zrušíme ho
      if (searchTerm.trim() !== "") {
        setSearchTerm("");
        setSearchResults([]);
      }
      // Nastavíme vybraný uzol - to spustí aktualizáciu stĺpcov
      setSelectedNode(node);
    },
    [searchTerm]
  );

  // Funkcia pre výber položky z autocomplete
  const handleAutocompleteSelect = useCallback((node: LocationNode | null) => {
    if (!node) {
      return;
    }
    // Vyčistíme vyhľadávací výraz
    setSearchTerm("");
    setSearchResults([]);
    // Nastavíme vybraný uzol - to spustí aktualizáciu stĺpcov
    setSelectedNode(node);
  }, []);

  return (
    <Box className={styles.finderContainer}>
      <Box className={styles.searchContainer}>
        <SearchAutocomplete
          searchTerm={searchTerm}
          searchResults={searchResults}
          onSearchTermChange={handleSearchTermChange}
          onResultSelect={handleAutocompleteSelect}
        />
      </Box>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        onBreadcrumbClick={handleBreadcrumbClick}
      />
      <Box className={styles.columnsContainer}>
        {columnItems[0].length > 0 && (
          <ColumnView
            level={visibleLevels[0]}
            items={columnItems[0]}
            selectedItem={selectedColumnItems[0]}
            onItemDoubleClick={(node) => handleColumnDoubleClick(0, node)}
          />
        )}
        {columnItems[1].length > 0 && (
          <ColumnView
            level={visibleLevels[1]}
            items={columnItems[1]}
            selectedItem={selectedColumnItems[1]}
            onItemDoubleClick={(node) => handleColumnDoubleClick(1, node)}
          />
        )}
        {columnItems[2].length > 0 && (
          <ColumnView
            level={visibleLevels[2]}
            items={columnItems[2]}
            selectedItem={selectedColumnItems[2]}
            onItemDoubleClick={(node) => handleColumnDoubleClick(2, node)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Finder;
