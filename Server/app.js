var Koa=require("koa");
var KoaBody=require("koa-body");
var cors=require("koa2-cors");
var route=require("koa-route");
var statics=require("koa-static");
var path=require("path");
var main=statics(path.join(__dirname));



var app=new Koa();

app.use(main)
app.use(KoaBody());
app.use(cors({
	origin: "*",
	exposeHeaders: ["WWW-Authenticate", "Server-Authorization", "Date"],
	maxAge: 100,
	credentials: true,
	allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Custom-Header",
	"anonymous"],
}));


app.use(route.post("/reg",require("./route/reg.js")))
app.use(route.post("/login",require("./route/login.js")))
app.use(route.get("/goodsfind",require("./route/goodsfind.js")))
app.listen(3000)
