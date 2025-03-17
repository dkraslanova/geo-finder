import React from 'react';
import { Box, Typography } from '@mui/material';
import { LocationNode } from '../data/locationData';
import { LEVEL_NAMES } from '../data/constants';
import styles from './ColumnView.module.scss';

interface ColumnViewProps {
  level: number;
  items: LocationNode[];
  selectedItem: LocationNode | null;
  onItemDoubleClick: (node: LocationNode) => void;
}

const ColumnView: React.FC<ColumnViewProps> = ({
  level,
  items,
  selectedItem,
  onItemDoubleClick,
}) => {
  // Ak nie sú žiadne položky, nezobrazujeme nič
  if (items.length === 0) {
    return null;
  }

  return (
    <Box className={styles.column}>
      <Box className={styles.columnHeader}>{LEVEL_NAMES[level]}</Box>
      <Box className={styles.columnContent}>
        {items.map((node) => (
          <Box
            key={node.id}
            className={`${styles.columnItem} ${
              selectedItem?.id === node.id ? styles.selected : ''
            }`}
            onDoubleClick={() => onItemDoubleClick(node)}
          >
            <Typography className={styles.columnItemName} variant="body2">
              {node.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ColumnView;
