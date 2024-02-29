import { Server } from "./presentation/server";


( async () => {
    console.log('App started...')
    main();
})();


function main(){
    Server.start();
}