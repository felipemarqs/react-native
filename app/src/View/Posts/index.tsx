import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import {styles} from "./styles";

import {useEffect, useRef, useState} from "react";
import {TextArea} from "../../components/TextArea";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-native";

export default function Posts() {
  const InputPasswordRef = useRef<TextInput | null>(null);

  useEffect(() => {
    // Check if InputPasswordRef.current is not null before accessing its properties
    if (InputPasswordRef.current !== null) {
      // TypeScript knows that ref is not null here
      InputPasswordRef.current.focus();
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const posts = [
    {
      id: "1",
      title: "Viagem pelas Montanhas Rochosas",
      content:
        "Acabei de voltar de uma incrível viagem pelas Montanhas Rochosas. As paisagens eram deslumbrantes e as trilhas foram desafiadoras, mas valeu a pena! Recomendo a todos os amantes da natureza.",
      author: "Maria Silva",
      date: "2024-02-27",
      likes: 120,
    },
    {
      id: "2",
      title: "Novo restaurante vegano na cidade",
      content:
        "Ontem experimentei o novo restaurante vegano que abriu na cidade e fiquei impressionado com a qualidade e sabor dos pratos. O ambiente também é muito agradável. Com certeza voltarei!",
      author: "João Santos",
      date: "2024-02-26",
      likes: 85,
    },
    {
      id: "3",
      title: "Dicas para melhorar sua produtividade",
      content:
        "Quero compartilhar algumas dicas que têm me ajudado a melhorar minha produtividade no trabalho. Espero que possam ser úteis para vocês também!",
      author: "Ana Oliveira",
      date: "2024-02-25",
      likes: 64,
    },
    {
      id: "4",
      title: "Receita de bolo de chocolate",
      content:
        "Hoje quero compartilhar com vocês a receita do bolo de chocolate mais delicioso que já fiz. É fácil de fazer e tenho certeza de que todos vão adorar!",
      author: "Lucas Mendes",
      date: "2024-02-24",
      likes: 42,
    },
    {
      id: "5",
      title: "Dicas para viajar com um orçamento apertado",
      content:
        "Gostaria de compartilhar algumas dicas que aprendi ao viajar com um orçamento apertado. Com um pouco de planejamento, é possível economizar muito!",
      author: "Carla Lima",
      date: "2024-02-23",
      likes: 78,
    },
    {
      id: "6",
      title: "Novo filme lançado este fim de semana",
      content:
        "Ontem fui ao cinema assistir ao novo filme que foi lançado este fim de semana e foi incrível! A história é envolvente e os efeitos especiais são impressionantes.",
      author: "Pedro Fernandes",
      date: "2024-02-22",
      likes: 95,
    },
    {
      id: "7",
      title: "Experiência em um curso online de programação",
      content:
        "Recentemente fiz um curso online de programação e gostaria de compartilhar minha experiência com vocês. Foi uma ótima maneira de aprender novas habilidades!",
      author: "Fernanda Almeida",
      date: "2024-02-21",
      likes: 57,
    },
    {
      id: "8",
      title: "Dicas para se manter motivado no trabalho",
      content:
        "Às vezes é difícil se manter motivado no trabalho, mas com algumas estratégias simples é possível manter o foco e a energia. Compartilho algumas dicas que têm funcionado para mim.",
      author: "Rafael Barbosa",
      date: "2024-02-20",
      likes: 88,
    },
    {
      id: "9",
      title: "Rotina de exercícios para iniciantes",
      content:
        "Quero compartilhar uma rotina de exercícios para iniciantes que tenho seguido nas últimas semanas. É importante começar devagar e aumentar a intensidade gradualmente!",
      author: "Patrícia Oliveira",
      date: "2024-02-19",
      likes: 71,
    },
    {
      id: "10",
      title: "Livro do mês: 'O Poder do Hábito'",
      content:
        "Este mês estou lendo 'O Poder do Hábito' e estou gostando muito! O livro explora como os hábitos funcionam e como podemos modificá-los para alcançar nossos objetivos. Recomendo!",
      author: "Carlos Ramos",
      date: "2024-02-18",
      likes: 105,
    },
  ];
  const navigate = useNavigate();

  type PostType = {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    likes: number;
  };

  const PostComponent = ({post}: {post: PostType}) => {
    return (
      <View key={post.id} style={styles.postContainer}>
        <View style={styles.postTitleContainer}>
          <Text style={styles.postTitle}>{post.title}</Text>
        </View>
        <Text style={styles.postAuthor}>Por: {post.author}</Text>
        <Text style={styles.postContent}>‣{post.content}</Text>
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.headingContainer}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 24}}>
          Posts
        </Text>
      </View>
    );
  };

  const EmptyState = () => {
    return (
      <View style={styles.headingContainer}>
        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 24}}>
          Nenhum Item foi encontrado
        </Text>
      </View>
    );
  };

  const Divider = () => {
    return (
      <View
        style={{
          height: 1,

          backgroundColor: "#fff",
          marginTop: 10,
          marginBottom: 10,
        }}
      />
    );
  };

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsRefreshing(false);
    console.log("refresh");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => handleRefresh()}
            refreshing={isRefreshing}
            //iOS Only
            tintColor="orange"
            title="Carregando..."
            titleColor="purple"
            //Android Only
            colors={["#1c7b7b", "#81c460"]}
            //progressBackgroundColor="#fff"
          />
        }
        ListEmptyComponent={<EmptyState />}
        ListHeaderComponent={<Header />}
        style={styles.postsWrapper}
        data={posts}
        ItemSeparatorComponent={() => <Divider />}
        //stickyHeaderIndices={[0, 3]}
        keyExtractor={(post) => post.id}
        renderItem={({item: post}) => <PostComponent post={post} />}
        initialNumToRender={50}
        getItemLayout={(_data, index) => ({
          index,
          length: 200 + 16,
          offset: (200 + 16) * index,
        })}
      />
      {/* <ScrollView style={styles.postsWrapper}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.postTitleContainer}>
              <Text style={styles.postTitle}>{post.title}</Text>
            </View>
            <Text style={styles.postAuthor}>Por: {post.author}</Text>
            <Text style={styles.postContent}>‣{post.content}</Text>
          </View>
        ))}
      </ScrollView> */}
      <Button onPress={() => navigate("/")}>Voltar</Button>
    </SafeAreaView>
  );
}
