export interface LocationNode {
  id: string;
  name: string;
  level: number;
  path: string[];
  parentId: string | null;
  type: 'country' | 'region' | 'district' | 'city' | 'street';
  children: LocationNode[];
}

export interface LocationMap {
  [key: string]: LocationNode;
}

export const locationData: LocationNode[] = [
  // SLOVENSKO
  {
    id: 'SK',
    name: 'Slovensko',
    level: 0,
    path: ['SK'],
    parentId: null,
    type: 'country',
    children: [
      // ZÁPADNÉ SLOVENSKO
      {
        id: 'SK-Z',
        name: 'Západné Slovensko',
        level: 1,
        path: ['SK', 'SK-Z'],
        parentId: 'SK',
        type: 'region',
        children: [
          // BRATISLAVSKÝ KRAJ
          {
            id: 'SK-BL',
            name: 'Bratislavský kraj',
            level: 2,
            path: ['SK', 'SK-Z', 'SK-BL'],
            parentId: 'SK-Z',
            type: 'district',
            children: [
              // BRATISLAVA
              {
                id: 'SK-BL-BA',
                name: 'Bratislava',
                level: 3,
                path: ['SK', 'SK-Z', 'SK-BL', 'SK-BL-BA'],
                parentId: 'SK-BL',
                type: 'city',
                children: [
                  // MICHALSKÁ ULICA
                  {
                    id: 'SK-BL-BA-MU',
                    name: 'Michalská ulica',
                    level: 4,
                    path: ['SK', 'SK-Z', 'SK-BL', 'SK-BL-BA', 'SK-BL-BA-MU'],
                    parentId: 'SK-BL-BA',
                    type: 'street',
                    children: [],
                  },
                  // HVIEZDOSLAVOVO NÁMESTIE
                  {
                    id: 'SK-BL-BA-HN',
                    name: 'Hviezdoslavovo námestie',
                    level: 4,
                    path: ['SK', 'SK-Z', 'SK-BL', 'SK-BL-BA', 'SK-BL-BA-HN'],
                    parentId: 'SK-BL-BA',
                    type: 'street',
                    children: [],
                  },
                ],
              },
              // PEZINOK
              {
                id: 'SK-BL-PK',
                name: 'Pezinok',
                level: 3,
                path: ['SK', 'SK-Z', 'SK-BL', 'SK-BL-PK'],
                parentId: 'SK-BL',
                type: 'city',
                children: [
                  // HOLUBYHO ULICA
                  {
                    id: 'SK-BL-PK-HU',
                    name: 'Holubyho ulica',
                    level: 4,
                    path: ['SK', 'SK-Z', 'SK-BL', 'SK-BL-PK', 'SK-BL-PK-HU'],
                    parentId: 'SK-BL-PK',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // TRNAVSKÝ KRAJ
          {
            id: 'SK-TA',
            name: 'Trnavský kraj',
            level: 2,
            path: ['SK', 'SK-Z', 'SK-TA'],
            parentId: 'SK-Z',
            type: 'district',
            children: [
              // TRNAVA
              {
                id: 'SK-TA-TT',
                name: 'Trnava',
                level: 3,
                path: ['SK', 'SK-Z', 'SK-TA', 'SK-TA-TT'],
                parentId: 'SK-TA',
                type: 'city',
                children: [
                  // HLAVNÁ ULICA
                  {
                    id: 'SK-TA-TT-HU',
                    name: 'Hlavná ulica',
                    level: 4,
                    path: ['SK', 'SK-Z', 'SK-TA', 'SK-TA-TT', 'SK-TA-TT-HU'],
                    parentId: 'SK-TA-TT',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // STREDNÉ SLOVENSKO
      {
        id: 'SK-S',
        name: 'Stredné Slovensko',
        level: 1,
        path: ['SK', 'SK-S'],
        parentId: 'SK',
        type: 'region',
        children: [
          // ŽILINSKÝ KRAJ
          {
            id: 'SK-ZI',
            name: 'Žilinský kraj',
            level: 2,
            path: ['SK', 'SK-S', 'SK-ZI'],
            parentId: 'SK-S',
            type: 'district',
            children: [
              // ŽILINA
              {
                id: 'SK-ZI-ZA',
                name: 'Žilina',
                level: 3,
                path: ['SK', 'SK-S', 'SK-ZI', 'SK-ZI-ZA'],
                parentId: 'SK-ZI',
                type: 'city',
                children: [
                  // NÁRODNÁ ULICA
                  {
                    id: 'SK-ZI-ZA-NU',
                    name: 'Národná ulica',
                    level: 4,
                    path: ['SK', 'SK-S', 'SK-ZI', 'SK-ZI-ZA', 'SK-ZI-ZA-NU'],
                    parentId: 'SK-ZI-ZA',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // BANSKOBYSTRICKÝ KRAJ
          {
            id: 'SK-BC',
            name: 'Banskobystrický kraj',
            level: 2,
            path: ['SK', 'SK-S', 'SK-BC'],
            parentId: 'SK-S',
            type: 'district',
            children: [
              // BANSKÁ BYSTRICA
              {
                id: 'SK-BC-BB',
                name: 'Banská Bystrica',
                level: 3,
                path: ['SK', 'SK-S', 'SK-BC', 'SK-BC-BB'],
                parentId: 'SK-BC',
                type: 'city',
                children: [
                  // NÁMESTIE SNP
                  {
                    id: 'SK-BC-BB-SNP',
                    name: 'Námestie SNP',
                    level: 4,
                    path: ['SK', 'SK-S', 'SK-BC', 'SK-BC-BB', 'SK-BC-BB-SNP'],
                    parentId: 'SK-BC-BB',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // VÝCHODNÉ SLOVENSKO
      {
        id: 'SK-V',
        name: 'Východné Slovensko',
        level: 1,
        path: ['SK', 'SK-V'],
        parentId: 'SK',
        type: 'region',
        children: [
          // KOŠICKÝ KRAJ
          {
            id: 'SK-KI',
            name: 'Košický kraj',
            level: 2,
            path: ['SK', 'SK-V', 'SK-KI'],
            parentId: 'SK-V',
            type: 'district',
            children: [
              // KOŠICE
              {
                id: 'SK-KI-KE',
                name: 'Košice',
                level: 3,
                path: ['SK', 'SK-V', 'SK-KI', 'SK-KI-KE'],
                parentId: 'SK-KI',
                type: 'city',
                children: [
                  // HLAVNÁ ULICA
                  {
                    id: 'SK-KI-KE-HU',
                    name: 'Hlavná ulica',
                    level: 4,
                    path: ['SK', 'SK-V', 'SK-KI', 'SK-KI-KE', 'SK-KI-KE-HU'],
                    parentId: 'SK-KI-KE',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // PREŠOVSKÝ KRAJ
          {
            id: 'SK-PV',
            name: 'Prešovský kraj',
            level: 2,
            path: ['SK', 'SK-V', 'SK-PV'],
            parentId: 'SK-V',
            type: 'district',
            children: [
              // PREŠOV
              {
                id: 'SK-PV-PO',
                name: 'Prešov',
                level: 3,
                path: ['SK', 'SK-V', 'SK-PV', 'SK-PV-PO'],
                parentId: 'SK-PV',
                type: 'city',
                children: [
                  // HLAVNÁ ULICA
                  {
                    id: 'SK-PV-PO-HU',
                    name: 'Hlavná ulica',
                    level: 4,
                    path: ['SK', 'SK-V', 'SK-PV', 'SK-PV-PO', 'SK-PV-PO-HU'],
                    parentId: 'SK-PV-PO',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // JUŽNÉ SLOVENSKO
      {
        id: 'SK-J',
        name: 'Južné Slovensko',
        level: 1,
        path: ['SK', 'SK-J'],
        parentId: 'SK',
        type: 'region',
        children: [],
      },
    ],
  },

  // ČESKÁ REPUBLIKA
  {
    id: 'CZ',
    name: 'Česká republika',
    level: 0,
    path: ['CZ'],
    parentId: null,
    type: 'country',
    children: [
      // ČECHY
      {
        id: 'CZ-C',
        name: 'Čechy',
        level: 1,
        path: ['CZ', 'CZ-C'],
        parentId: 'CZ',
        type: 'region',
        children: [
          // PRAHA
          {
            id: 'CZ-PR',
            name: 'Praha',
            level: 2,
            path: ['CZ', 'CZ-C', 'CZ-PR'],
            parentId: 'CZ-C',
            type: 'district',
            children: [
              // PRAHA (MESTO)
              {
                id: 'CZ-PR-P',
                name: 'Praha (mesto)',
                level: 3,
                path: ['CZ', 'CZ-C', 'CZ-PR', 'CZ-PR-P'],
                parentId: 'CZ-PR',
                type: 'city',
                children: [
                  // VÁCLAVSKÉ NÁMĚSTÍ
                  {
                    id: 'CZ-PR-P-VN',
                    name: 'Václavské náměstí',
                    level: 4,
                    path: ['CZ', 'CZ-C', 'CZ-PR', 'CZ-PR-P', 'CZ-PR-P-VN'],
                    parentId: 'CZ-PR-P',
                    type: 'street',
                    children: [],
                  },
                  // KARLOVA ULICE
                  {
                    id: 'CZ-PR-P-KU',
                    name: 'Karlova ulice',
                    level: 4,
                    path: ['CZ', 'CZ-C', 'CZ-PR', 'CZ-PR-P', 'CZ-PR-P-KU'],
                    parentId: 'CZ-PR-P',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // STŘEDOČESKÝ KRAJ
          {
            id: 'CZ-SC',
            name: 'Středočeský kraj',
            level: 2,
            path: ['CZ', 'CZ-C', 'CZ-SC'],
            parentId: 'CZ-C',
            type: 'district',
            children: [
              // KLADNO
              {
                id: 'CZ-SC-KL',
                name: 'Kladno',
                level: 3,
                path: ['CZ', 'CZ-C', 'CZ-SC', 'CZ-SC-KL'],
                parentId: 'CZ-SC',
                type: 'city',
                children: [
                  // HLAVNÍ TŘÍDA
                  {
                    id: 'CZ-SC-KL-HT',
                    name: 'Hlavní třída',
                    level: 4,
                    path: ['CZ', 'CZ-C', 'CZ-SC', 'CZ-SC-KL', 'CZ-SC-KL-HT'],
                    parentId: 'CZ-SC-KL',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // MORAVA
      {
        id: 'CZ-M',
        name: 'Morava',
        level: 1,
        path: ['CZ', 'CZ-M'],
        parentId: 'CZ',
        type: 'region',
        children: [
          // JIHOMORAVSKÝ KRAJ
          {
            id: 'CZ-JM',
            name: 'Jihomoravský kraj',
            level: 2,
            path: ['CZ', 'CZ-M', 'CZ-JM'],
            parentId: 'CZ-M',
            type: 'district',
            children: [
              // BRNO
              {
                id: 'CZ-JM-BM',
                name: 'Brno',
                level: 3,
                path: ['CZ', 'CZ-M', 'CZ-JM', 'CZ-JM-BM'],
                parentId: 'CZ-JM',
                type: 'city',
                children: [
                  // NÁMĚSTÍ SVOBODY
                  {
                    id: 'CZ-JM-BM-NS',
                    name: 'Náměstí Svobody',
                    level: 4,
                    path: ['CZ', 'CZ-M', 'CZ-JM', 'CZ-JM-BM', 'CZ-JM-BM-NS'],
                    parentId: 'CZ-JM-BM',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // RAKÚSKO
  {
    id: 'AT',
    name: 'Rakúsko',
    level: 0,
    path: ['AT'],
    parentId: null,
    type: 'country',
    children: [
      // VÝCHODNÉ RAKÚSKO
      {
        id: 'AT-E',
        name: 'Východné Rakúsko',
        level: 1,
        path: ['AT', 'AT-E'],
        parentId: 'AT',
        type: 'region',
        children: [
          // VIEDEŇ
          {
            id: 'AT-W',
            name: 'Viedeň',
            level: 2,
            path: ['AT', 'AT-E', 'AT-W'],
            parentId: 'AT-E',
            type: 'district',
            children: [
              // VIEDEŇ (MESTO)
              {
                id: 'AT-W-W',
                name: 'Viedeň (mesto)',
                level: 3,
                path: ['AT', 'AT-E', 'AT-W', 'AT-W-W'],
                parentId: 'AT-W',
                type: 'city',
                children: [
                  // STEPHANSPLATZ
                  {
                    id: 'AT-W-W-SP',
                    name: 'Stephansplatz',
                    level: 4,
                    path: ['AT', 'AT-E', 'AT-W', 'AT-W-W', 'AT-W-W-SP'],
                    parentId: 'AT-W-W',
                    type: 'street',
                    children: [],
                  },
                  // MARIAHILFER STRASSE
                  {
                    id: 'AT-W-W-MS',
                    name: 'Mariahilfer Strasse',
                    level: 4,
                    path: ['AT', 'AT-E', 'AT-W', 'AT-W-W', 'AT-W-W-MS'],
                    parentId: 'AT-W-W',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // DOLNÉ RAKÚSKO
          {
            id: 'AT-N',
            name: 'Dolné Rakúsko',
            level: 2,
            path: ['AT', 'AT-E', 'AT-N'],
            parentId: 'AT-E',
            type: 'district',
            children: [
              // ST. PÖLTEN
              {
                id: 'AT-N-SP',
                name: 'St. Pölten',
                level: 3,
                path: ['AT', 'AT-E', 'AT-N', 'AT-N-SP'],
                parentId: 'AT-N',
                type: 'city',
                children: [
                  // HAUPTPLATZ
                  {
                    id: 'AT-N-SP-HP',
                    name: 'Hauptplatz',
                    level: 4,
                    path: ['AT', 'AT-E', 'AT-N', 'AT-N-SP', 'AT-N-SP-HP'],
                    parentId: 'AT-N-SP',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      // ZÁPADNÉ RAKÚSKO
      {
        id: 'AT-W',
        name: 'Západné Rakúsko',
        level: 1,
        path: ['AT', 'AT-W'],
        parentId: 'AT',
        type: 'region',
        children: [
          // TIROLSKO
          {
            id: 'AT-T',
            name: 'Tirolsko',
            level: 2,
            path: ['AT', 'AT-W', 'AT-T'],
            parentId: 'AT-W',
            type: 'district',
            children: [
              // INNSBRUCK
              {
                id: 'AT-T-I',
                name: 'Innsbruck',
                level: 3,
                path: ['AT', 'AT-W', 'AT-T', 'AT-T-I'],
                parentId: 'AT-T',
                type: 'city',
                children: [
                  // MARIA-THERESIEN-STRASSE
                  {
                    id: 'AT-T-I-MTS',
                    name: 'Maria-Theresien-Strasse',
                    level: 4,
                    path: ['AT', 'AT-W', 'AT-T', 'AT-T-I', 'AT-T-I-MTS'],
                    parentId: 'AT-T-I',
                    type: 'street',
                    children: [],
                  },
                ],
              },
            ],
          },
          // SALZBURSKO
          {
            id: 'AT-S',
            name: 'Salzbursko',
            level: 2,
            path: ['AT', 'AT-W', 'AT-S'],
            parentId: 'AT-W',
            type: 'district',
            children: [
              // SALZBURG
              {
                id: 'AT-S-S',
                name: 'Salzburg',
                level: 3,
                path: ['AT', 'AT-W', 'AT-S', 'AT-S-S'],
                parentId: 'AT-S',
                type: 'city',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Funkcia na vytvorenie flat mapy
export const createLocationMap = (nodes: LocationNode[]): LocationMap => {
  const map: LocationMap = {};

  const addToMap = (node: LocationNode) => {
    map[node.id] = node;
    node.children.forEach(addToMap);
  };

  nodes.forEach(addToMap);
  return map;
};

// Inicializácia mapy pri importe
export const locationMap = createLocationMap(locationData);

// Funkcia na získanie breadcrumbs
export const getBreadcrumbs = (nodeId: string): LocationNode[] => {
  const node = locationMap[nodeId];
  if (!node) return [];

  return node.path.map((id) => locationMap[id]);
};

// Funkcia na vyhľadávanie
export const searchLocations = (
  query: string,
  nodes: LocationNode[]
): LocationNode[] => {
  if (!query.trim()) return [];
  const results: LocationNode[] = [];
  const lowerQuery = query.toLowerCase();

  const search = (node: LocationNode) => {
    if (node.name.toLowerCase().includes(lowerQuery)) {
      results.push(node);
    }
    node.children.forEach(search);
  };

  nodes.forEach(search);
  return results;
};
