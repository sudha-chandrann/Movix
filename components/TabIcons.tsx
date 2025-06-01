import { Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';

interface props {
  icon: keyof typeof FontAwesome.glyphMap;
  focused: boolean;
  title: string;
}

function TabIcon({ focused, icon, title }: props) {
  if (focused) {
    return (
      <LinearGradient
        colors={['#d8b4fe', '#c084fc', '#a855f7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <FontAwesome size={28} name={icon} color="#ffffff" />
        <Text className="text-white text-base font-semibold ml-2">
          {title}
        </Text>
      </LinearGradient>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <FontAwesome size={28} name={icon} color="#A8B5DB" />
    </View>
  );
}

export default TabIcon;