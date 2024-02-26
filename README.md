# auth0_v1

### set env

* frontend
    ```bash
    cat <<EOF > ./frontend/.env.local
    NEXT_PUBLIC_API_URL='http://localhost:8080'
    NEXT_PUBLIC_AUTH0_REDIRECT_URI='http://localhost:3000'
    NEXT_PUBLIC_AUTH0_DOMAIN='**********************************.auth0.com'
    NEXT_PUBLIC_AUTH0_CLIENT_ID='********************************'
    EOF
    ```

* backend
    ```bash
    cat <<EOF > ./backend/.env
    AUTH0_DOMAIN='**********************************.auth0.com'
    AUTH0_AUDIENCE='http://localhost:8080'
    EOF
    ```
