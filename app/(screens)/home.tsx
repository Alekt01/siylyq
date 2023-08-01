import { SearchNormal } from 'iconsax-react-native';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  const gifts = [
    {
      title: 'Namaste in Style: Personalized Yoga Mat for Your Beloved Parent',
      context:
        'Let her know all the reasons why you love her with help from the simple prompts in this fill-in-the-blank book. Some pages will bring out your mushy, gushy side, while others will encourage you to take a walk down memory lane. "Don\'t know what to get that special someone? This has you covered," one Amazon user wrote.',
      tags: ['Yoga', 'Parents'],
      imageUrl:
        'https://wiworldandi.com/cdn/shop/articles/what_kind_of_yoga_mats1_2.jpg?v=1646807088',
    },
    {
      title: 'I Wrote a Book About You',
      context:
        "Let her know all the reasons why you love her with help from the simple prompts in this fill-in-the-blank book. Some pages will bring out your mushy, gushy side, while others will encourage you to take a walk down memory lane. 'Don't know what to get that special someone? This has you covered,' one Amazon user wrote.",
      tags: ['Book', 'Wife'],
      imageUrl:
        'https://m.media-amazon.com/images/I/81fl5eFs7iL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title:
        'Golf Enthusiast: Personalized Golf Club Set for Your Amazing Father',
      context:
        'Surprise your dad with a custom-designed golf club set that perfectly matches his style and preferences on the course. You can have his name or a motivational quote engraved on the clubs, along with a sleek design that complements his game. This thoughtful gift will not only improve his golfing experience but also show that you appreciate his passion for the sport.',
      tags: ['Golf', 'Father'],
      imageUrl:
        'https://curated-uploads.imgix.net/AgAAAB0AeWZRtNybPvmUu2aZGsoxdA.png?auto=compress%2Cformat&ch=Width%2CDPR%2CSave-Data&ar=16%3A11&fit=crop&ixlib=react-9.4.0',
    },
    {
      title:
        'Football Fever: Personalized Football Jersey for Your Awesome Brother',
      context:
        "Show your brother some love with a custom-designed football jersey that showcases his unique style and team spirit. You can have his name and favorite player's number printed on the jersey, along with a design that represents his favorite football team. This thoughtful gift will not only make him stand out on the field but also show that you support his love for football.",
      tags: ['Football', 'Brother'],
      imageUrl:
        'https://bootcamp.com.ph/cdn/shop/products/HJ9606_2_APPAREL_Photography_FrontCenterView_white.jpg?v=1665423221',
    },
    {
      title:
        'Paint Your Passion: Personalized Art Set for Your Talented Husband',
      context:
        'Surprise your husband with a custom-designed art set that celebrates his artistic flair and creativity. You can have his name or an inspiring quote engraved on the art supplies, along with a design that reflects his artistic preferences. This thoughtful gift will not only encourage his passion for painting but also show that you admire his artistic talent.',
      tags: ['Painting', 'Husband'],
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/67a/158/a2f63e51a6e900ae5fb5b4f96b3b747336-Bragard.2x.h473.w710.jpg',
    },
    {
      title:
        "Culinary Delights: Personalized Chef's Apron for Your Master Chef Grandpa",
      context:
        "Delight your grandpa with a custom-designed chef's apron that highlights his culinary expertise and love for cooking. You can have his name or a heartwarming message printed on the apron, along with a design that represents his favorite dishes. This thoughtful gift will not only make him look stylish in the kitchen but also show that you cherish his cooking skills.",
      tags: ['Cooking', 'Grandpa'],
      imageUrl:
        'https://pyxis.nymag.com/v1/imgs/67a/158/a2f63e51a6e900ae5fb5b4f96b3b747336-Bragard.2x.h473.w710.jpg',
    },
    {
      title: 'Reel in Joy: Personalized Fishing Gear for Your Beloved Uncle',
      context:
        'Surprise your uncle with a custom-designed fishing gear set that complements his fishing adventures. You can have his name or a fishing-related quote printed on the gear, along with a design that represents his favorite fishing spot. This thoughtful gift will not only enhance his fishing experiences but also show that you enjoy spending time with him by the water.',
      tags: ['Fishing', 'Uncle'],
      imageUrl:
        'https://wildlife.utah.gov/blog_photos/2023-04-17-fishing-equipment.jpg',
    },
    {
      title: 'Dance with Joy: Personalized Dance Shoes for Your Schoolmate',
      context:
        'Show your schoolmate some love with custom-designed dance shoes that match their dance style and personality. You can have their name or a dance-inspired quote printed on the shoes, along with a design that reflects their favorite dance genre. This thoughtful gift will not only support their passion for dancing but also remind them of the fun times you had together at school.',
      tags: ['Dancing', 'Schoolmate'],
      imageUrl:
        'https://ae01.alicdn.com/kf/HTB1JGZYtGmWBuNjy1Xaq6xCbXXaS/Sneakers-Men-Dancing-Shoes-Leather-Latin-Ballroom-Dance-Shoes-Indoor-Leather-Shoes-Sports-Male-Latin-Boys.jpg',
    },
    {
      title:
        'Checkmate in Style: Personalized Chess Set for Your Strategic Friend',
      context:
        'Surprise your chess enthusiast friend with a custom-designed chess set that showcases their love for the game. You can have their name or a chess-related quote engraved on the chess pieces, along with a design that represents their favorite chess strategy. This thoughtful gift will not only challenge their intellect but also show that you appreciate their passion for playing chess.',
      tags: ['Playing Chess', 'Friend'],
      imageUrl:
        'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpgOiZYf.jpeg',
    },
    {
      title: 'Shop in Style: Personalized Tote Bag for Your Shopaholic Friend',
      context:
        'Delight your shopaholic friend with a custom-designed tote bag that complements their shopping sprees. You can have their name or a shopping-related quote printed on the bag, along with a design that represents their favorite shopping destination. This thoughtful gift will not only carry their purchases but also show that you enjoy their company on shopping adventures.',
      tags: ['Shopping', 'Friend'],
      imageUrl:
        'https://www.qualitylogoproducts.com/custom-totebags/budget-non-woven-shopper-totebag-hq-749538.jpg',
    },
    {
      title:
        'Melodies of Love: Personalized Headphones for Your Music-Loving Friend',
      context:
        'Surprise your music-loving friend with custom-designed headphones that match their taste in tunes. You can have their name or a music-inspired quote engraved on the headphones, along with a design that reflects their favorite music genre. This thoughtful gift will not only enhance their listening experience but also show that you appreciate their passion for music.',
      tags: ['Listening Music', 'Friend'],
      imageUrl:
        'https://cdn11.bigcommerce.com/s-k11cg5mzh9/products/429/images/122815/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__39125.1685726468.500.750.png?c=2',
    },
    {
      title:
        'Artistic Catch: Personalized Fishing Rod for Your Fishing Enthusiast Husband',
      context:
        'Surprise your husband who loves fishing with a custom-designed fishing rod that showcases his artistic side. You can have his name or a fishing-inspired quote engraved on the rod, along with a design that represents his favorite fish species. This thoughtful gift will not only make his fishing experience more enjoyable but also show that you recognize his passion for both fishing and art.',
      tags: ['Fishing', 'Husband'],
      imageUrl:
        'https://www.mywestshore.com/wp-content/uploads/2017/05/Thunderjet-Pilot-buy-a-fishing-boat-1024x683.jpg',
    },
    {
      title: 'Elegant Moves: Personalized Dance Shoes for Your Graceful Sister',
      context:
        'Show your graceful sister some love with custom-designed dance shoes that match her elegant dance style. You can have her name or a dance-inspired quote printed on the shoes, along with a design that reflects her favorite dance form. This thoughtful gift will not only support her passion for dancing but also remind her of the beautiful moments you shared on the dance floor.',
      tags: ['Dancing', 'Sister'],
      imageUrl:
        'https://bestpointe.com/assets/images/products/773/big/performance.jpg',
    },
    {
      title:
        'Strategic Mind: Personalized Chess Set for Your Intellectual Grandpa',
      context:
        'Delight your intellectual grandpa with a custom-designed chess set that highlights his strategic prowess. You can have his name or a chess-related quote engraved on the chess pieces, along with a design that represents his favorite chess opening. This thoughtful gift will not only challenge his mind but also show that you admire his wisdom and love for playing chess.',
      tags: ['Playing Chess', 'Grandpa'],
      imageUrl:
        'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ColinStapczynski/phpgOiZYf.jpeg',
    },
    {
      title:
        'Culinary Creativity: Personalized Apron for Your Master Chef Uncle',
      context:
        'Surprise your uncle, the master chef, with a custom-designed apron that celebrates his culinary creativity. You can have his name or a cooking-inspired quote printed on the apron, along with a design that represents his signature dishes. This thoughtful gift will not only protect his clothes in the kitchen but also show that you appreciate his innovative cooking skills.',
      tags: ['Cooking', 'Uncle'],
      imageUrl:
        'https://cdn.thewirecutter.com/wp-content/media/2021/04/chef-knife-2048px-2281-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    },
    {
      title:
        'Football Fanatic: Personalized Football Jersey for Your Sports-Loving Schoolmate',
      context:
        "Show your sports-loving schoolmate some love with a custom-designed football jersey that showcases their dedication to the game. You can have their name and favorite player's number printed on the jersey, along with a design that represents their favorite football team. This thoughtful gift will not only make them feel like a part of the team but also show that you share their passion for football.",
      tags: ['Football', 'Schoolmate'],
      imageUrl:
        'https://bootcamp.com.ph/cdn/shop/products/HJ9606_2_APPAREL_Photography_FrontCenterView_white.jpg?v=1665423221',
    },
    {
      title:
        'Artistic Strokes: Personalized Painting Set for Your Creative Brother',
      context:
        'Surprise your creative brother with a custom-designed painting set that complements his artistic strokes. You can have his name or an inspiring art quote engraved on the supplies, along with a design that reflects his favorite painting style. This thoughtful gift will not only nurture his artistic talent but also show that you believe in his creative potential.',
      tags: ['Painting', 'Brother'],
      imageUrl:
        'https://www.homepaintingdecor.com/cdn/shop/products/1_117_large.jpg?v=1654477415',
    },
    {
      title:
        'Musical Melodies: Personalized Headphones for Your Music-Loving Grandpa',
      context:
        'Delight your music-loving grandpa with custom-designed headphones that match his favorite melodies. You can have his name or a music-inspired quote engraved on the headphones, along with a design that represents his preferred music era. This thoughtful gift will not only bring joy to his heart but also show that you cherish the moments spent listening to music together.',
      tags: ['Listening Music', 'Grandpa'],
      imageUrl:
        'https://cdn11.bigcommerce.com/s-k11cg5mzh9/products/429/images/122815/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__39125.1685726468.500.750.png?c=2',
    },
  ];

  const handleSearch = (text: string) => {
    setSearchValue(text);
  };

  return (
    <SafeAreaView style={styles.containerPink}>
      <View className="px-5 py-6 pb-60">
        <Text className="mb-5 text-5xl font-semibold text-black">Syulyq</Text>

        <View className="mb-4 flex w-full flex-row-reverse items-center justify-center rounded-3xl bg-gray-50">
          <TextInput
            onChangeText={(searchText) => setSearchValue(searchText)}
            value={searchValue}
            className="flex rounded-lg px-6 py-4"
            placeholder="Search Personalized Gifts for You"
          />
          <TouchableOpacity
            onPress={() => handleSearch(searchValue)}
            className="items-center"
          >
            <SearchNormal size="24" className="text-black" />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View className="flex flex-col gap-10 p-2">
            {gifts.map((gift) => {
              if (
                gift.context
                  .toLowerCase()
                  .includes(searchValue.toLowerCase()) ||
                gift.tags
                  .map((tag) => tag.toLowerCase())
                  .includes(searchValue.toLowerCase())
              ) {
                return (
                  <TouchableOpacity
                    className="relative flex max-w-xs flex-col gap-y-3 rounded-2xl bg-gray-50 p-4"
                    key={`key-${gift.title}`}
                  >
                    <Image
                      source={{ uri: gift.imageUrl }}
                      className="h-60 w-full rounded-md object-cover"
                    />
                    <Text className="text-lg text-gray-950">{gift.title}</Text>
                    <Text className="truncate text-xs text-gray-950">
                      {gift.context}
                    </Text>

                    <View className="flex flex-row items-center gap-x-3">
                      {gift.tags.map((tag, index) => {
                        return (
                          <TouchableOpacity
                            onPress={() => setSearchValue(tag)}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${tag}-${index}`}
                            className="rounded-2xl bg-gray-200 p-2"
                          >
                            <Text className="text-sm font-bold text-black">
                              {tag}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </TouchableOpacity>
                );
              }

              return '';
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
