import { io } from "socket.io-client";

class SocketService {
  socket;

  connect() {
    if (!this.socket) {
      this.socket = io(
        import.meta.env.VITE_BACKEND_URL || "http://localhost:9000",
        {
          autoConnect: false,
          transports: ["websocket"],
        }
      );
    }
    if (!this.socket.connected) {
      this.socket.connect();
    }
  }

  disconnect() {
    if (this.socket && this.socket.connected) {
      this.socket.disconnect();
    }
  }

  on(event, callback) {
    this.socket?.on(event, callback);
  }

  off(event, callback) {
    this.socket?.off(event, callback);
  }

  emit(e, data) {
    this.socket?.emit(e, data);
  }
}

export const socketService = new SocketService();
