# Geo Finder

Aplikácia pre navigáciu a vyhľadávanie geografických lokácií s trojstĺpcovým rozložením.

Autor: Diana Čarnoká
Dátum: 16.3.2025

## Funkcie

- Trojstĺpcové rozloženie pre jednoduchú navigáciu medzi úrovňami lokácií (krajiny, regióny, kraje, mestá, ulice)
- Auto-complete vyhľadávanie lokácií podľa názvu (krajiny, regióny, kraje, mestá, ulice)
- Navigácia pomocou breadcrumbs

## Technológie

- ViteJs
- React
- TypeScript
- SCSS modules
- Material UI component library

## Inštalácia

1. Naklonujte si repozitár
2. Nainštalujte dependencie pomocou `yarn install` alebo `npm install`
3. Spustite aplikáciu pomocou `yarn start` alebo `npm start`
4. Otvorte prehliadač na adrese `http://localhost:3000`

## Štruktúra projektu

```
geo-finder/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   ├── Breadcrumbs.tsx
  │   │   ├── Breadcrumbs.module.scss
  │   │   ├── ColumnView.tsx
  │   │   ├── ColumnView.module.scss
  │   │   ├── Finder.tsx
  │   │   ├── Finder.module.scss
  │   │   ├── SearchAutocomplete.tsx
  │   │   └── SearchAutocomplete.module.scss
  │   ├── data/
  │   │   ├── locationData.ts
  │   │   └── constants.ts
  │   ├── App.tsx
  │   ├── App.module.scss
  │   ├── index.tsx
  │   ├── index.css
  │   └── react-app-env.d.ts
  ├── package.json
  ├── tsconfig.json
  └── yarn.lock
```

## Dátová štruktúra

Aplikácia používa hierarchickú dátovú štruktúru pre geografické lokácie, ktorá kombinuje stromovú štruktúru s hashmapou pre efektívne vyhľadávanie:

```typescript
interface LocationNode {
  id: string;
  name: string;
  type: "country" | "region" | "district" | "city" | "street";
  level: number;
  parentId: string | null;
  path: string[];
  children: LocationNode[];
}

interface LocationMap {
  [key: string]: LocationNode;
}
```

### Princíp fungovania:

1. **Stromová štruktúra** - Dáta sú organizované hierarchicky (krajiny -> regióny -> kraje -> mestá -> ulice), čo umožňuje prirodzenú navigáciu medzi úrovňami.

2. **Hashmapa pre rýchly prístup** - Okrem stromovej štruktúry sa pri inicializácii vytvára hashmapa (`LocationMap`), ktorá mapuje ID lokácie na jej objekt, čo umožňuje prístup k ľubovoľnému uzlu v konštantnom čase O(1).

3. **Uloženie cesty v uzle** - Každý uzol obsahuje pole `path` s ID všetkých predkov, čo umožňuje rýchle generovanie breadcrumbs bez potreby prehľadávania stromu.
