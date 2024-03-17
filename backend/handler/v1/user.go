package v1

import (
	"net/http"

	"github.com/auth0_v1/pkg/app"
	"github.com/auth0_v1/pkg/e"
	"github.com/gin-gonic/gin"
)

func GetMe(c *gin.Context) {
	ag := app.Gin{C: c}
	userID := "1"

	user := gin.H{
		"id":       userID,
		"username": "test",
		"email":    "hoge@example.com",
	}

	ag.Response(
		http.StatusOK,
		e.SUCCESS,
		user,
	)
}
