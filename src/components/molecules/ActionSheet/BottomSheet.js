import React from "react";
import {
  Select,
  Box,
  CheckIcon,
  FormControl
} from "native-base";
import colors from "../../../theme/colors/colors";

function BottomSheet({ service, onValueChange }) {
  return (
    <FormControl style={{paddingTop:5}}>
      <Box style={{ borderColor:colors.primary,borderWidth:1,borderRadius:10}}>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="SET THRESH"
          placeholder="SET THRESH"
          color='#254F82'
          borderWidth={0}
          _selectedItem={{
            // bg: "#254F82",
            // color:'white',
          
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={onValueChange}
        >
          <Select.Item label="Male" value="male" />
          <Select.Item label="Female" value="female" />
        </Select>
      </Box>
    </FormControl>
  );
}
export default BottomSheet;
