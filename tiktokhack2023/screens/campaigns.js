import { View, FlatList, Text, StyleSheet, ImageBackground, Pressable, Image} from 'react-native'
import { useTailwind } from 'tailwind-rn/dist';
import image from "../assets/pokemonListing1.jpeg"
// import logo from "../assets/essentials.png";

const data = [
    { campaignID: 1, title: "Pokemon", source: "../assets/pokemonListing1.jpeg", logo: "../assets/pokemonListing1.jpeg"},
    { campaignID: 2, title: "Mario", source: "../assets/pokemonListing1.jpeg" , logo: "../assets/pokemonListing1.jpeg"},
    { campaignID: 3, title: "Zelda", source: "../assets/pokemonListing1.jpeg" , logo: "../assets/pokemonListing1.jpeg"},
    { campaignID: 4, title: "Drew House", source: "../assets/pokemonListing1.jpeg" , logo: "../assets/pokemonListing1.jpeg"},
    { campaignID: 5, title: "Fortnite", source: "../assets/pokemonListing1.jpeg" , logo: "../assets/pokemonListing1.jpeg"},
    { campaignID: 6, title: "Minecraft", source: "../assets/pokemonListing1.jpeg" , logo: "../assets/pokemonListing1.jpeg"},
]

const Campaigns = () => {
    // const data = fetchCampaignsData();
    // const url = "localhost:3000"
    // const campaignData = await fetch (`${url}/users/`)
    const tailwind = useTailwind();
    return (
    <FlatList
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
                            source={image}
                            style={styles.image}
                        />
                    </View>
                </Pressable>
            )
        }}
        keyExtractor={(item) => item.campaignID}
        contentContainerStyle={styles.listContainer}
        style={tailwind(`top-10`)}
    />
    
    );
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