package app

import (
	"github.com/auth0_v1/pkg/e"
	"github.com/gin-gonic/gin"
)

type Gin struct {
	C *gin.Context
}

type Response struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

func (g *Gin) Response(httpCode, code int, data interface{}) {
	g.C.JSON(httpCode, Response{
		Code: code,
		Msg:  e.GetMsg(code),
		Data: data,
	})
}
