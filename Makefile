# frontend
export NEXT_PUBLIC_AUTH0_REDIRECT_URI=http://localhost:3000
export NEXT_PUBLIC_AUTH0_DOMAIN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
export NEXT_PUBLIC_AUTH0_CLIENT_ID='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
export NEXT_PUBLIC_AUTH0_AUDIENCE='https://xxxxxxxxxxxx'
export NEXT_PUBLIC_AUTH0_SCOPE='xxxxx:xxxxx'

# backend
export ORIGIN_URL='http://localhost:3000'
export AUTH0_DOMAIN='**********************************.auth0.com'
export AUTH0_AUDIENCE='https://xxxxxxxxxxxx'

front:
	cd frontend && yarn dev

api:
	cd backend && air -c .air.toml

api-lint:
	cd backend && golangci-lint run
