# auth0_v1

### set env

* frontend
    ```bash
    cat <<EOF > ./frontend/.env.local
    # API SERVER
    NEXT_PUBLIC_API_URL='http://localhost:8080'

    # AUTH0
    NEXT_PUBLIC_AUTH0_REDIRECT_URI='http://localhost:3000'
    NEXT_PUBLIC_AUTH0_DOMAIN='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    NEXT_PUBLIC_AUTH0_CLIENT_ID='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    NEXT_PUBLIC_AUTH0_AUDIENCE='https://xxxxxxxxxxxx'
    NEXT_PUBLIC_AUTH0_SCOPE='xxxxx:xxxxx'
    EOF
    ```

* backend
    ```bash
    cat <<EOF > ./backend/.env
    ORIGIN_URL='http://localhost:3000'
    AUTH0_DOMAIN='**********************************.auth0.com'
    AUTH0_AUDIENCE='https://xxxxxxxxxxxx'
    EOF
    ```
