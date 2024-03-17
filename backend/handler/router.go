package handler

import (
	"net/http"

	v1 "github.com/auth0_v1/handler/v1"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	apiV1 := r.Group("/api/v1")
	apiV1.Use()
	{
		apiV1.GET("/healthcheck", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{})
		})

		apiV1.GET("/users/:id", v1.GetMe)
	}

	return r
}
