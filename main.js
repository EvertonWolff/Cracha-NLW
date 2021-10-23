const LinksSocialMedia = {
  github: 'EvertonWolff',
  // youtube: 'jakelinygracielly',
  // facebook: 'everton.wolff',
  instagram: 'everton_wolff'
  // twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

// i = i + 1
// i++

// ser humano 12345678910
// computador 0123456789

changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  // alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userProfile.src = data.avatar_url
      userNickname.textContent = data.login
    })
}
getGitHubProfilesInfos() //  invocando funçao
