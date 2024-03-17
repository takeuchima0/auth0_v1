package config

import (
	"github.com/caarlos0/env/v7"
)

var EnvConfig = envConfig{}

type envConfig struct {
	// App Configuration
	Environment string `env:"ENVIRONMENT" envDefault:"development"`

	// Server Configuration
	Origin  string `env:"ORIGIN_URL" envDefault:"http://localhost:3001"`
	Port    string `env:"PORT" envDefault:"8081"`
	RunMode string `env:"GIN_MODE" envDefault:"release"`

	// Auth0 Configuration
	Auth0Domain string `env:"AUTH0_DOMAIN" envDefault:"test"`
	Audience    string `env:"AUTH0_AUDIENCE" envDefault:"https://test-api.com"`
}

func init() {
	if err := env.Parse(&EnvConfig); err != nil {
		panic(err)
	}
}
