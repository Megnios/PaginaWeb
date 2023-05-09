const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();

const owner = "Megnios";
const repo = "PaginaWeb";
const path = "HTML"; // ruta de la carpeta que contiene los archivos HTML

async function getHtmlFiles() {
  const iterator = octokit.paginate.iterator(octokit.rest.repos.getContent, {
    owner,
    repo,
    path,
  });

  const htmlFiles = [];

  for await (const response of iterator) {
    const files = response.data;

    // Filtramos los archivos que son HTML
    const htmlFilesInPage = files.filter((file) => file.name.endsWith(".html"));

    // Agregamos los archivos HTML a la lista
    htmlFiles.push(...htmlFilesInPage);
  }

  return htmlFiles;
}

(async () => {
  const htmlFiles = await getHtmlFiles();
  console.log(htmlFiles);
})();