const { password } = process.env;
const conStr = `mongodb+srv://oyekhadim:${password}@cluster0.wyayzcv.mongodb.net/?retryWrites=true&w=majority`;

export default conStr;
