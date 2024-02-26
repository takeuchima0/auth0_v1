package main

import (
	"log"
	"net/http"

	"github.com/auth0_v1/config"
	"github.com/joho/godotenv"
)

var origin string

func init() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatalf("Error loading the .env file: %v", err)
	}
	origin = config.GetEnv("ORIGIN_URL", "http://localhost:3000")
}

func CORSMiddleware(handler http.Handler, origin string) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", origin)
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		handler.ServeHTTP(w, r)
	})
}

func main() {
	router := http.NewServeMux()

	router.Handle("/api/public", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write([]byte(`{"message":"public api ok"}`)); err != nil {
			log.Printf("Error writing response: %v", err)
		}
	}))

	router.Handle("/v1/users/me", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		if _, err := w.Write([]byte(`{"message":"get me api ok"}`)); err != nil {
			log.Printf("Error writing response: %v", err)
		}
	}))

	log.Print("Server listening on http://localhost:8080")
	if err := http.ListenAndServe("0.0.0.0:8080", CORSMiddleware(router, origin)); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
