import React from "react"
import socketio from "socket.io-client";
//const SOCKET_URL = "http://localhost:8080"
const SOCKET_URL = "https://sms.gebeta.app"

export const socket = socketio.connect(SOCKET_URL);
