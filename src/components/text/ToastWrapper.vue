<template>
  <div id="toastWrapper" class="flex flex-col absolute bottom-0 right-0 w-80">

  </div>
</template>

<script>
import { createApp } from 'vue';
import ToastMessage from '@/components/text/ToastMessage.vue';

export default {
  name: 'ToastWrapper',
  methods: {
    createToast(message) {
      const toast = createApp(ToastMessage, {
        message: message.message,
        messageType: message.messageType,
      });

      // We mount the toast to the div instead of the toastWrapper because of an error when we add
      // multiple instances.
      const wrapper = document.getElementById('toastWrapper');
      const div = document.createElement('div');
      wrapper?.appendChild(div);
      toast.mount(div);

      // Remove message in 10 seconds.
      setTimeout(() => {
        toast.unmount();
      }, 10000);
    },
    convertStatusCodeToMessageType(message) {
      let resultMessage;
      const firstNumber = Number(String(message.status)[0]);

      switch (firstNumber) {
        case 5:
        case 4:
          resultMessage = {
            message: message.message,
            messageType: 'error',
            status: message.status,
          };
          break;
        case 2:
          resultMessage = {
            message: message.message,
            messageType: 'success',
            status: 200,
          };
          break;
        default:
          resultMessage = {
            message: 'Er ging iets verkeerd',
            messageType: 'error',
            status: 500,
          };
      }

      return resultMessage;
    },
  },
  computed: {
    getCurrentMessage() {
      return this.$store.getters.getMessage;
    },
  },
  watch: {
    getCurrentMessage(newMessage) {
      const message = this.convertStatusCodeToMessageType(newMessage);
      this.createToast(message);
    },
  },
};
</script>
