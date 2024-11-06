import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View, TextInput } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { getItemFromKarmaStore, Item, updateItemInKarmaStore } from '@/store/itemStore';

export default function AddKarma() {
    const colorScheme = useColorScheme();
    const router = useRouter()
    const { id } = useLocalSearchParams();

    const [currentItem, setCurrentItem] = useState<Item & { key: string } | null>(null);
    const [karmaPointsInput, setKarmaPointsInput] = useState('');
    const [contentInput, setContentInput] = useState('');

    useEffect(() => {
        if (!id) return;

        let currentItem = getItemFromKarmaStore(id as string);
        if (!currentItem) return;

        setCurrentItem(currentItem)
        setContentInput(currentItem.description)
        setKarmaPointsInput(currentItem.karma.toString())
    }, [id])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Karma.</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />

            <View
                style={{
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    width: '100%',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                    }}>
                    <TextInput
                        style={[styles.bigInput, {
                            flex: 1,
                            alignContent: 'flex-start',
                            verticalAlign: 'top',
                        }]}
                        placeholder="Please enter description."
                        keyboardType='default'
                        value={contentInput}
                        onChangeText={setContentInput}
                        multiline={true}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 5,
                    }}>
                    <TextInput
                        style={[styles.smolInput, {
                            flex: 1,
                            alignContent: 'flex-start',
                            verticalAlign: 'top',
                        }]}
                        placeholder="Please enter karma points."
                        keyboardType='numeric'
                        value={karmaPointsInput}
                        onChangeText={setKarmaPointsInput}
                    />
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    margin: 10,
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >

                <TouchableOpacity
                    style={{
                        padding: 20,
                        margin: 10,
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text,
                        width: '80%',
                        borderRadius: 30,
                    }}
                    onPress={() => {
                        updateItemInKarmaStore({
                            id: id as string,
                            description: contentInput,
                            karma: parseInt(karmaPointsInput),
                            created_at: new Date().toISOString(),
                        }, currentItem?.key as string)
                        router.push('/');
                    }}>
                    <Text>
                        Edit.
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        padding: 10,
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: '80%',
    },
    card: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '80%',
    },
    smolInput: {
        padding: 15,
        borderRadius: 16,
        fontSize: 18,
        marginRight: 10
    },
    bigInput: {
        padding: 15,
        borderRadius: 16,
        fontSize: 18,
        marginRight: 10,
        height: 150
    }
});
