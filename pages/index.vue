<template>
  <div>
    <h1>Chat App</h1>
    <div>
      <div v-for="message in messages" :key="message.id">
        <strong>{{ message.name }}:</strong> {{ message.text }}
      </div>
    </div>
    <div>
      <input v-model="newMessage" placeholder="Type your message...">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '~/plugins/firebase';

export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        await addDoc(collection(db, 'messages'), {
          name: 'John',
          text: this.newMessage.trim()
        });
        this.newMessage = '';
      }
    }
  },
  mounted() {
    const messagesCollection = collection(db, 'messages');
    onSnapshot(messagesCollection, (snapshot) => {
      this.messages = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
          text: doc.data().text
        };
      });
    });
  }
};
</script>
