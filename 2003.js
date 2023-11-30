const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const contudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = contudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
 
//para ler linhas com um unico valor na mesma linha use o comando a seguir




//// READING FILE | STREAMS ////
class LineReader {
	/**
	 * @param {import("fs").PathLike} path
	 * @param {BufferEncoding} encoding
	 * @return {import("readline").ReadLine}
	 */
	static createReadLineInterface(path, encoding = "utf8") {
		const readStreamOptions = {
			encoding: encoding,
			flags: "r",
			emitClose: true,
			autoClose: true
		}

		return createInterface({
			input: createReadStream(path, readStreamOptions),
			crlfDelay: Infinity,
			terminal: false
		})
	}

	/**
	 * @param {import("fs").PathLike} path
	 * @param {BufferEncoding} encoding
	 */
	static create(path, encoding) {
		const RLI = LineReader.createReadLineInterface(path, encoding)

		let EOF = false

		const nextLineGenerator = (async function* () {
			for await (const line of RLI)
				yield line
		})()

		RLI.once("close", () => { EOF = true })

		return {
			hasNextLine: () => !EOF,
			nextLine: async (/** @type {unknown} */ fn) => {
				const { value } = (await nextLineGenerator.next())
				return (typeof fn === "function") ? fn(value) : value
			},
			close: () => RLI.close()
		}
	}
}

const calcMaximumDelayTime = (hours, minutes) => (hours >= 7) ? ((hours - 7) * 60) + minutes : 0

async function main() {
	const PATH = "/dev/stdin"
	const ENCODING = "utf8"
	const lineReader = LineReader.create(PATH, ENCODING)

	const helper = (line = "") => line.split(":", 2).map(value => Number.parseInt(value, 10))
	const nextLine = lineReader.nextLine.bind(null, helper)

	const output = []

	while (lineReader.hasNextLine()) {
		const [hour, min] = await nextLine()
		if (Number.isNaN(hour) || Number.isNaN(min)) break // EOF
		output.push(`Atraso maximo: ${calcMaximumDelayTime(hour, min)}`)
	}

	if (lineReader.hasNextLine())
		lineReader.close()

	console.log(output.join("\n"))
}

main()


