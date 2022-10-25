package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Contact struct {
	Title    string
	Username string
	Link     string
	IMGUrl   string
}

var contacts = []Contact{{
	Title:    "Telegram",
	Username: "iikworks",
	Link:     "https://t.me/iikworks",
	IMGUrl:   "/static/img/social/telegram.png",
}, {
	Title:    "Kwork",
	Username: "iikworks",
	Link:     "https://kwork.ru/user/iikworks",
	IMGUrl:   "/static/img/social/kwork.png",
}, {
	Title:    "Github",
	Username: "iikworks",
	Link:     "https://github.com/iikworks",
	IMGUrl:   "/static/img/social/github.png",
}}

func (h *Handler) Contacts(c *gin.Context) {
	c.HTML(http.StatusOK, "contacts/list.html", gin.H{
		"title":    "Контакты",
		"contacts": contacts,
	})
}
