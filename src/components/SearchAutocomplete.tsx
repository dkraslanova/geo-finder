import React from "react";
import { Autocomplete, TextField, Box, Typography } from "@mui/material";
import { LocationNode } from "../data/locationData";
import { LEVEL_TYPE_NAMES } from "../data/constants";
import styles from "./SearchAutocomplete.module.scss";

interface SearchAutocompleteProps {
  searchTerm: string;
  searchResults: LocationNode[];
  onSearchTermChange: (term: string) => void;
  onResultSelect: (node: LocationNode | null) => void;
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  searchTerm,
  searchResults,
  onSearchTermChange,
  onResultSelect,
}) => {
  return (
    <Autocomplete
      freeSolo
      options={searchResults}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.name
      }
      inputValue={searchTerm}
      onInputChange={(event, newInputValue) => {
        onSearchTermChange(newInputValue);
      }}
      onChange={(event, newValue) => {
        if (newValue && typeof newValue !== "string") {
          onResultSelect(newValue);
        }
      }}
      renderOption={(props, option) => {
        const { key, ...restProps } = props;
        return (
          <Box component="li" key={key} {...restProps}>
            <Box className={styles.searchResultItem}>
              <Typography className={styles.searchResultName} variant="body1">
                {option.name}
              </Typography>
              <Box className={styles.searchResultInfo}>
                <Typography variant="caption" color="text.secondary">
                  {LEVEL_TYPE_NAMES[option.level]}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Hľadať lokáciu..."
          variant="outlined"
          fullWidth
          size="small"
        />
      )}
      sx={{ width: "100%" }}
    />
  );
};

export default SearchAutocomplete;
