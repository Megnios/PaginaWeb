import { Octokit } from "octokit";

const octokit = new Octokit({ 
  auth: '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',
});

async function getUserInfo() {
  try {
    const { data } = await octokit.users.getByUsername({
      username: "Megnios"
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUserInfo();