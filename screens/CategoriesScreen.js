import { FlatList, View, StyleSheet, ListItem } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryID: itemData.item.id,
            });
        }
        return (
            <CategoryGridTile title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
                navigation={navigation}
            />
        );
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );

}
export default CategoriesScreen;