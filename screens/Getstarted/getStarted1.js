import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { useState, useRef, useEffect } from "react";

export default function GetStarted1({ navigation }) {
  const flatlistRef = useRef();

  const screenWidth = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);

  //auto scroll
  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index, //for first image - 300 *0 =  0px,second image : 300 * 1  third 1
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../../assets/imageGetStarted1.png"),
      title: "The medical care you need",
      paragraph:
        " Our doctor consultation app makes it easy to get the medical care you need, when you need it.",
    },
    {
      id: "02",
      image: require("../../assets/imageGetStarted2.png"),
      title: "Save time and money",
      paragraph:
        " Our doctor consultation app is a great way to save time and money on your healthcare.",
    },
    {
      id: "03",
      image: require("../../assets/imageGetStarted3.png"),
      title: " Get peace of mind ",
      paragraph: " you have access to qualified medical professionals 24/7.",
    },
  ];

  //handleScroll:
  const handleScroll = (event) => {
    const scrollposition = event.nativeEvent.contentOffset.x;
    const index = scrollposition / screenWidth;
    setActiveIndex(index);
  };

  //dot indicators:

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#26b280",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              borderColor: "#26b280",
              borderWidth: 1,
            }}></View>
        );
      }
      return (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            height: 10,
            width: 10,
            borderRadius: 5,
            marginHorizontal: 5,
            borderColor: "#26b280",
            borderWidth: 1,
          }}></View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.scrollview}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        data={carouselData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[styles.card, { width: screenWidth }]}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.paragraph}>{item.paragraph}</Text>
          </View>
        )}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 10,
        }}>
        {renderDotIndicators()}
      </View>

      <View style={styles.bottombtns}>
        <TouchableOpacity style={styles.getStartedbtn}>
          <Text style={styles.btntextstart}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.skipbtn}>
          <Text style={styles.btnskiptext}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview: {
    height: "300",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginBottom: 100,
    marginTop: 55,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 10,
  },
  paragraph: {
    width: 320,
    textAlign: "center",
    color: "grey",
  },
  bottombtns: {
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedbtn: {
    marginBottom: 10,
    width: 250,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#26b280",
    alignItems: "center",
    justifyContent: "center",
  },
  btntextstart: {
    color: "white",
    fontWeight: "bold",
  },
  skipbtn: {
    marginBottom: 55,
    marginTop: 5,
  },
  btnskiptext: {
    color: "gray",
    fontWeight: "400",
  },
});
