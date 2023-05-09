import { Octokit } from "octokit";

const octokit = new Octokit();

async function fetchHTMLFiles() {
  const options = octokit.repos.listContents.endpoint.merge({
    owner: 'Megnios',
    repo: 'PaginaWeb',
    path: 'HTML',
  });

  const response = await octokit.paginate.iterator(options);

  for await (const { data } of response) {
    const files = data.filter(item => item.type === 'file' && item.name.endsWith('.html'));

    for (const file of files) {
      const fileUrl = file.download_url;
      // Aquí puedes hacer lo que necesites con la URL del archivo
      console.log(fileUrl);
    }
  }
}

fetchHTMLFiles();