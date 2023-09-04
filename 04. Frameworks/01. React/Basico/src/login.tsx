import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  BaseTextFieldProps,
} from "@mui/material/";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const initialListPage: number = 0;
    if (username === "admin" && password === "test") {
      navigate(`/list/${initialListPage}`);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div className="login-page">
      <Card sx={{ width: 300, height: 300, padding: "18px" }}>
        <CardHeader title="Login" />

        <CardContent>
          <div>
            <form className="login-card" onSubmit={handleNavigation}>
              <div>
                <TextField
                  label="UserName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></TextField>
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
              </div>

              <Button variant="contained" type="submit">
                Login
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
