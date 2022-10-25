package handler

import "github.com/gin-gonic/gin"

type Handler struct {
}

func NewHandler() *Handler {
	return &Handler{}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	router.Static("/static", "./static")
	router.LoadHTMLGlob("views/**/*")

	router.GET("/", h.WorksList)
	router.GET("/work/:id", h.WorkDetail)

	router.GET("/contacts", h.Contacts)

	return router
}
