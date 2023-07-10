import React, { useState, useEffect, useRef } from 'react';

/*
const user = {
  firstName :'ryari',
  lastName: 'youm'
}

function today() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  return year +'년' + month + '월' + day + '일';
}

function tick() {
  const element = (
    <div>
      <h1>Hello, {user.firstName} {user.lastName}!</h1>
      <h2>It is {today()} {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
*/
function AnalogClock() {
  const canvasRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const audioRef = useRef(null);

  useEffect(() => {
    const intervalID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    function drawHands(context, centerX, centerY, radius, date) {
      const second = date.getSeconds() * Math.PI / 30;
      const minute = date.getMinutes() * Math.PI / 30;
      const hour = date.getHours() * Math.PI / 6 + minute / 12;

      drawHand(context, centerX, centerY, hour, radius * 0.5, 8);
      drawHand(context, centerX, centerY, minute, radius * 0.7, 6);
      drawHand(context, centerX, centerY, second, radius * 0.8, 2);
    }

    function drawHand(context, centerX, centerY, position, length, width) {
      const endX = centerX + Math.sin(position) * length;
      const endY = centerY - Math.cos(position) * length;
      context.beginPath();
      context.lineWidth = width;
      context.moveTo(centerX, centerY);
      context.lineTo(endX, endY);
      context.stroke();
    }

    function drawClockFace(context, centerX, centerY, radius) {
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.fillStyle = '#f2f2f2';
      context.fill();
      context.lineWidth = 3;
      context.stroke();
      context.beginPath();
      context.arc(centerX, centerY, radius * 0.1, 0, 2 * Math.PI);
      context.fillStyle = '#333';
      context.fill();
    
      // 현재 시간을 텍스트로 표시
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const timeText = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
      context.font = '20px Arial';
      context.fillStyle = '#333';
    
      // 출력할 텍스트의 크기를 계산하여 출력 위치를 조정
      const textWidth = context.measureText(timeText).width;
      context.fillText(timeText, centerX - textWidth / 2, centerY + radius + 20);

      // 음악 파일 로드 및 재생
      audioRef.current = new Audio('/music.mp3');
      //audioRef.current.play();
    }
    

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawClockFace(context, centerX, centerY, radius);
    drawHands(context, centerX, centerY, radius, date);
  }, [date]);

  return (<><canvas ref={canvasRef} width={600} height={700} />
  <audio ref={audioRef} /></>);
}

export default AnalogClock;
