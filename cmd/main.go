package main

import (
	"context"
	"fmt"
	"github.com/iikworks/portfolio"
	"github.com/iikworks/portfolio/pkg/handler"
	"github.com/joho/godotenv"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	if err := godotenv.Load(); err != nil {
		fmt.Errorf("error initializing env variables: %s", err.Error())
	}

	handlers := handler.NewHandler()
	srv := portfolio.Server{}

	go func() {
		if err := srv.Run(os.Getenv("PORT"), handlers.InitRoutes()); err != nil {
			fmt.Errorf("error occured while running http server: %s", err.Error())
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGTERM, syscall.SIGINT)
	<-quit

	if err := srv.Shutdown(context.Background()); err != nil {
		fmt.Errorf("error occured on server shutting down: %s", err.Error())
	}
}
