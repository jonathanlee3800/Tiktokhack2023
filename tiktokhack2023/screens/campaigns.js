import { View, FlatList, Text, StyleSheet, ImageBackground, ImageComponent } from 'react-native'
import image from "../assets/pokemon.jpg"
import {
    ViewPlaceholder,
    Direction,
  } from "react-native-js-shimmer-placeholder";

const data = [
    { campaignID: 1, title: "Pokemon", source: "../assets/pokemon.jpg" },
    { campaignID: 2, title: "Mario", source: "../assets/pokemon.jpg" },
    { campaignID: 3, title: "Zelda", source: "../assets/pokemon.jpg" },
    { campaignID: 4, title: "Drew House", source: "../assets/pokemon.jpg" },
    { campaignID: 5, title: "Fortnite", source: "../assets/pokemon.jpg" },
    { campaignID: 6, title: "Minecraft", source: "../assets/pokemon.jpg" },
    { campaignID: 7, title: "Call of Duty", source: "../assets/pokemon.png" },
    { campaignID: 8, title: "Among Us", source: "../assets/pokemon.jpg" },
    { campaignID: 9, title: "Animal Crossing", source: "../assets/pokemon.jpg" },
    { campaignID: 10, title: "Fall Guys", source: "../assets/pokemon.jpg" },
    { campaignID: 11, title: "Apex Legends", source: "../assets/pokemon.jpg" },
    { campaignID: 12, title: "Overwatch", source: "../assets/pokemon.jpg" },
    { campaignID: 13, title: "League of Legends", source: "../assets/pokemon.jpg" },
    { campaignID: 14, title: "World of Warcraft", source: "../assets/pokemon.jpg" },
    { campaignID: 15, title: "Final Fantasy", source: "../assets/pokemon.jpg" },
    { campaignID: 16, title: "Assassin's Creed", source: "../assets/pokemon.jpg" },
    { campaignID: 17, title: "The Legend of Zelda: Breath of the Wild", source: "../assets/pokemon.jpg" },
    { campaignID: 18, title: "Super Smash Bros Ultimate", source: ".../assets/pokemon.jpg" },
    { campaignID: 19, title: "Red Dead Redemption 2", source: "../assets/pokemon.jpg" },
    { campaignID: 20, title: "Cyberpunk 2077", source: "../assets/pokemon.jpg" },
]

const Campaigns = () => {
    return (<FlatList
        data={data}
        renderItem={({ item }) => {
            // console.log(item)
            return (
                <ImageBackground style={styles.card} imageStyle={styles.image} source={image}>
                    <ViewPlaceholder
                        show={true}
                        width={100}
                        height={100}
                        style={{
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            borderRadius: 50,
                        }}
                        direction={Direction.UP}
                        gradientContainerStyle={{ borderRadius: 50 }}
                    >

                        <View style={styles.overlay}>
                            <Text style={styles.text}>{item.title}</Text>
                        </View>
                    </ViewPlaceholder>
                </ImageBackground>
            )
        }}
        keyExtractor={(item) => item.campaignID}
        contentContainerStyle={styles.listContainer}
    />);
};

const styles = StyleSheet.create({
    listContainer: {
        // flex: 1,
        // borderColor: "black",
        // borderWidth: "5px",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: '90%',
        minHeight: 216,
        marginTop: 15,
    },
    image: {
        flex: 1,
        borderRadius: 12,
        resizeMode: 'cover',
        // position: 'absolute'
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)',
        textAlign: 'center',
        borderRadius: 12,
        justifyContent: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%"
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white'
    }
})

export default Campaigns;