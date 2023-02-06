import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Text } from 'react-native';
import { View } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import colors from '../../../theme/colors/colors';
var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
];
class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ]
    }
  }
  render() {
  return (
    <View style={{flexDirection:'row',width:wp('100%'),justifyContent:'space-evenly',alignItems:'center'}}>
          <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
    
            itemStyle={{
            colors:colors.secondary,
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              { 
                
                placeholder: "placeholder",
                placeholderTextColor:colors.secondary,
                underlineColorAndroid: "transparent",
                style: {
             
                    padding: 12,
                    width:wp('85%'),
                    borderWidth: 1,
                    borderColor: colors.secondary,
                    borderRadius: hp("4%"),
                    height: hp("5.5%"),
                },
                
                // onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          
        />
        
    </View>
         
  );
  }
}

export default DropDown;