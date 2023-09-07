import { View, FlatList, Text, StyleSheet, ImageBackground, Pressable, Image} from 'react-native'
import image from "../assets/pokemon.jpg"
import logo from "../assets/essentials.png";

const data = [
    { campaignID: 1, title: "Pokemon", source: "../assets/pokemon.jpg", logo: "../assets/pokemon.png"},
    { campaignID: 2, title: "Mario", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 3, title: "Zelda", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 4, title: "Drew House", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 5, title: "Fortnite", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 6, title: "Minecraft", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 7, title: "Call of Duty", source: "../assets/pokemon.png" , logo: "../assets/pokemon.png"},
    { campaignID: 8, title: "Among Us", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 9, title: "Animal Crossing", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 10, title: "Fall Guys", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 11, title: "Apex Legends", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 12, title: "Overwatch", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 13, title: "League of Legends", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 14, title: "World of Warcraft", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 15, title: "Final Fantasy", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 16, title: "Assassin's Creed", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 17, title: "The Legend of Zelda: Breath of the Wild", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 18, title: "Super Smash Bros Ultimate", source: ".../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 19, title: "Red Dead Redemption 2", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
    { campaignID: 20, title: "Cyberpunk 2077", source: "../assets/pokemon.jpg" , logo: "../assets/pokemon.png"},
]

const Campaigns = () => {
    // const data = fetchCampaignsData();
    return (<FlatList
        data={data}
        renderItem={({ item }) => {
            // console.log(item)
            return (
                <Pressable
                    onPress={() => { console.log("pressed") }}>
                    {/* <ImageBackground 
                    style={styles.card}
                    imageStyle={styles.image}
                    source={image}
                    >
                    <View style={styles.overlay}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </ImageBackground> */}
                    <View
                        style={styles.card}
                    >   
                        <Image
                            source={logo}
                            style={styles.image}
                        />
                    </View>
                </Pressable>
            )
        }}
        keyExtractor={(item) => item.campaignID}
        contentContainerStyle={styles.listContainer}
    />);
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        alignItems: 'center'
    },
    card: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        minWidth: "90%",
        maxHeight: 216,
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: 'white',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 8,  
        elevation: 5
    },
    image: {
        // flex: 1,
        width: "65%",
        height: "100%",
        resizeMode: 'contain'
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