import React from "react";
import { Box, Typography } from "@mui/material";
import { LocationNode } from "../data/locationData";
import styles from "./Breadcrumbs.module.scss";

interface BreadcrumbsProps {
  breadcrumbs: LocationNode[];
  onBreadcrumbClick: (node: LocationNode) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  breadcrumbs,
  onBreadcrumbClick,
}) => {
  return (
    <Box className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.id}>
          <Typography
            className={styles.breadcrumbItem}
            onClick={() => onBreadcrumbClick(crumb)}
            variant="body2"
            component="span"
          >
            {crumb.name}
          </Typography>
          {index < breadcrumbs.length - 1 && (
            <Typography
              className={styles.breadcrumbSeparator}
              variant="body2"
              component="span"
            >
              /
            </Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
