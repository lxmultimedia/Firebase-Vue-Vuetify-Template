# Firebase-Vue-Vuetify-Template
## Simple ToDo App


![alt text](https://cloud.ozona.ch/git/todo2.png)


Required:
>> Firebase project with firestore database

Authentication:
>> static authentication with email/password (has to be enabled in firebase project)


## Project setup
```
npm install

- add firebasse settings in /src/firebase/config.js
- add details in .env

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build

- copy /dist folder to webserver
```

### Lints and fixes files
```
npm run lint
```

### .env 
(has to created in root directory)
```
VUE_APP_NAME="ToDo App"

VUE_APP_FIREBASE_USER="your firebase auth email"
VUE_APP_FIREBASE_PW="your password"
```

### .htaccess
```
# Disable Directory listing
Options -Indexes

# block files which needs to be hidden, specify .example extension of the file
<Files ~ "\.(env|json|config.js|md|gitignore|gitattributes|lock)$">
    Order allow,deny
    Deny from all
</Files>

 ```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


