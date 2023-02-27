import { Configuration, OpenAIApi } from "openai";
let setting = from "./key.json";

let handler = async (m, { conn, text }) => {
if (!text) throw "[!] Masukkan teks untuk memuat gambar"
const configuration = new Configuration({
    apiKey: setting.keyopenai
});
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
          } catch (err) {
            console.log(err);
            m.reply("Maaf, sepertinya ada yang error :"+ err);
          }
          
handler.help = ['aiimg', 'openaiimg']
handler.tags = ['info', 'fun']
handler.command = /^(ai|openai)$/i
export default handler
