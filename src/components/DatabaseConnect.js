import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const DatabaseConnect = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [server, setServer] = useState("");
  const [database, setDatabase] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleConnect = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/connect-db", {
        user,
        password,
        server,
        database,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        setError(false);
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage(response.data.message);
        setError(true);
      }
    } catch (error) {
      console.error("Connection failed:", error);
      setMessage("Server Error. Try again later.");
      setError(true);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: "30px", width: "100%", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Database Connection
        </Typography>
        <form onSubmit={handleConnect}>
          <TextField
            label="User"
            fullWidth
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label="Server"
            fullWidth
            margin="normal"
            value={server}
            onChange={(e) => setServer(e.target.value)}
            required
          />
          <TextField
            label="Database"
            fullWidth
            margin="normal"
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Connect
          </Button>
        </form>
        {message && (
          <Alert severity={error ? "error" : "success"} sx={{ mt: 2 }}>
            {message}
          </Alert>
        )}
      </Paper>
    </Container>
  );
};

export default DatabaseConnect;
