import { Send } from 'iconsax-react-native';
import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from '../(auth)/login';

const Chat = () => {
  const [person, setPerson] = useState('');
  const [celebration, setCelebration] = useState('');
  const [hobbies, setHobbies] = useState('');

  const [chatResponse, setChatResponse] = useState({
    title: '',
    detailedInformation: '',
    tags: [],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const headers = new Headers({
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  });

  const prompt = `I want you to act as a gift adviser. I will provide you with an individual's wishes, hobbies and its idsome information such as age, gender and etc for advice on gifting them presents, make surprises. You should use your knowledge of cognitive behavioral therapy, psychology techniques in order to create ideal gift for that individual in order to make surprise. 
  
    Recommend only one gift and answer in written format below. You should return response in JSON Format where you will have title and detailed information about that gift. Also do not forget about tags. Title should be in one sentence. Detailed Information should be not less 2 sentences and not longer than 5 sentences. You should return me tuple that has two elements of the tags. First Tag should be about category of interest, hobby that person into and second is the user's specificity among others. There is examples: 
    
    The Input and Output is JSON Objects:

    Input 1: {
      "person": "Grand Father",
      "celebration": "Birthday",
      "hobbies": ["Hokkey"]
    }

    Output 1: {
      "title": "Custom Engraved Hockey Stick",
      "detailedInformation": "Surprise your Grandfather on his Birthday with a custom engraved hockey stick. As a hockey enthusiast, he will cherish this personalized gift and be reminded of your thoughtful gesture every time he plays or sees it. This gift is not only a representation of his favorite hobby but also a unique and special item tailored just for him.",
      "tags": ["Sports", "Grand Father"]
    }

    Input 2: {
      "person": 'Sister',
      "celebration": 'Wedding',
      "hobbies": ['Football']
    }

    Output 2: {
      {
        "title": "Custom Football Jersey",
        "detailedInformation": "For your Sister's Wedding, surprise her with a custom football jersey of her favorite team or with her name and lucky number on it. Even though it's her big day, she'll appreciate the thoughtful gesture and the nod to her favorite hobby. This personalized gift will not only make her feel special but also add a touch of uniqueness to her wedding day.",
        "tags": ["Sports", "Sister"]
      }
    }
    `;

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      messages: [
        { role: 'system', content: prompt },
        {
          role: 'user',
          content: JSON.stringify({ person, celebration, hobbies }),
        },
      ],
      model: 'gpt-3.5-turbo',
    }),
  };

  const getResponse = () => {
    if (person && celebration && hobbies) {
      fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setChatResponse(JSON.parse(data.choices[0].message.content));
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage('Fill all inputs!');
    }
  };

  return (
    <SafeAreaView style={styles.containerPink}>
      <View className="flex justify-evenly px-6 pt-10">
        <Text className="mb-10 text-xl font-bold text-indigo-700">
          Use AI to Perfectly Choose a Gift for Your Relatives
        </Text>

        {errorMessage && (
          <Text className="text-center text-xl font-bold text-red-600">
            {errorMessage}
          </Text>
        )}

        <ScrollView>
          <View className="mb-8 flex items-end">
            <View className="mb-4 flex w-full flex-row items-center justify-between rounded-3xl border-[0.5px] border-gray-400 bg-gray-50 pr-5">
              <TextInput
                onChangeText={(personText) => setPerson(personText)}
                value={person}
                className="flex rounded-lg px-6 py-4"
                placeholder="Search Personalized Gifts for Your "
              />
            </View>

            <View className="mb-4 flex w-full flex-row items-center justify-between rounded-3xl border-[0.5px] border-gray-400 bg-gray-50 pr-5">
              <TextInput
                onChangeText={(celebrationText) =>
                  setCelebration(celebrationText)
                }
                value={celebration}
                className="flex rounded-lg px-6 py-4"
                placeholder="What is your event?"
              />
            </View>

            <View className="mb-4 flex w-full flex-row items-center justify-between rounded-3xl border-[0.5px] border-gray-400 bg-gray-50 pr-5">
              <TextInput
                onChangeText={(hobbiesText) => setHobbies(hobbiesText)}
                value={hobbies}
                className="flex rounded-lg px-6 py-4"
                placeholder="What Hobbies has your Person?"
              />
            </View>

            <TouchableOpacity
              onPress={getResponse}
              className="flex max-w-[250px] rounded-full bg-indigo-500 p-5"
            >
              <Send size="24" className="text-white" />
            </TouchableOpacity>
          </View>

          <View className="flex max-w-xs flex-col items-center justify-center self-center rounded-2xl border-[1px] border-indigo-400 bg-gray-50 p-5">
            <Text className="mb-4 text-lg font-bold text-gray-950">
              {chatResponse.title}
            </Text>
            <Text className="truncate text-sm text-gray-950">
              {chatResponse.detailedInformation}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
