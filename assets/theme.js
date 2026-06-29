.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: white;
  font-family: serif;
}

.bg-video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0,0,0,0.2), rgba(0,0,0,0.9));
  backdrop-filter: blur(2px);
}

.nav {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.center h1 {
  font-size: 80px;
  letter-spacing: 5px;
}

.center button {
  margin-top: 20px;
  padding: 12px 30px;
  border: 1px solid white;
  background: transparent;
  color: white;
  border-radius: 999px;
}