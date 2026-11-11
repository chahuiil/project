# 논문 프로젝트 페이지

FlashSAC의 논문 정보 → 영상 → 연구 설명 흐름을 참고해 새로 작성한 GitHub Pages용 정적 웹사이트입니다. 참고 사이트의 코드·영상·그림을 복제하지 않았습니다.

현재는 **내용을 채우기 전의 템플릿**입니다. 논문 제목, 저자, 소속, 연구 결과는 모두 교체용 문구이며 실제 논문 정보가 아닙니다. GitHub 저장소 생성, 페이지 공개, collaborator 초대는 아직 수행하지 않았습니다.

## 1. 바로 보기

압축을 풀고 `index.html`을 브라우저로 여세요. 별도 설치나 빌드 없이 동작합니다. 전달용 `preview.html`은 현재 디자인을 반영한 독립형 미리보기입니다. **수정 결과는 index.html에서 확인하세요.** preview.html은 자동 갱신되지 않습니다.

VS Code의 Live Server를 사용해도 됩니다. Python이 있다면 프로젝트 폴더에서:

```bash
python3 -m http.server 8000
```

그다음 `http://localhost:8000`을 여세요.

`index.html`의 CSS·JS 주소에는 캐시 구분용 `?v=...`가 붙어 있습니다. CSS·JS를 수정해 배포할 때는 해당 주소의 버전 값도 바꿔야 이전 파일이 캐시에 남아 있는 브라우저에서도 새 파일을 불러옵니다.

## 2. 파일 구성

| 파일 | 역할 |
| --- | --- |
| `content.js` | 논문 제목·저자·본문·링크·미디어 경로. 대부분의 수정은 여기에서 합니다. |
| `index.html` | 페이지 섹션과 구조 |
| `styles.css` | 색상·글꼴·여백·모바일 레이아웃 |
| `app.js` | 콘텐츠 표시·도메인별 영상·그림 확대·BibTeX 복사 |
| `assets/` | 그림, 동영상, PDF 등 게시할 파일 |
| `.github/workflows/pages.yml` | main에 변경사항을 올리면 GitHub Pages로 배포 |
| `.nojekyll` | 정적 파일 표시를 위한 설정 |
| `preview.html` | 현재 디자인의 독립형 미리보기 |

흰색 배경과 기본 시스템 글꼴을 사용하며, 로고와 장식 패턴 없이 논문 내용을 중심으로 구성했습니다. 외부 폰트, 추적 코드, 프레임워크, 패키지 설치는 사용하지 않습니다. 게시 경로는 모두 상대 경로이므로 `계정.github.io/저장소명/`에서 동작합니다.

## 3. 실제 논문 정보 넣기

`content.js`의 `window.PROJECT` 내용을 수정하세요. 문자열 내부에 작은따옴표가 있으면 `\'`로 쓰거나 큰따옴표/백틱으로 감싸세요. 여러 줄 본문과 BibTeX에는 백틱을 사용하면 편합니다.

- `name`: 프로젝트 약칭
- `title`, `subtitle`: 논문 제목, 한 줄 소개
- `venue`: 학회/연도/상태
- `authors`: 저자 배열. `affiliation`은 소속 번호, `equal`은 공동 1저자 여부
- `affiliations`: 소속 이름 배열
- `links`: Paper, arXiv, Code, Video의 URL. 빈 문자열은 Soon으로 표시됩니다.
- `teaser`: 대표 영상 경로, 포스터, 설명
- `tldr`, `abstract`: 한 줄 요약, 초록
- `demoGroups`: 실험 카테고리와 영상 목록. 항목 추가·삭제 가능
- `method`: 연구 방법 소개, 그림, 설명, 기여 항목
- `results`: 실험 결과 그림과 설명
- `bibtex`: 인용 정보. 비어 있으면 복사 버튼 비활성화
- `draft`: 내용을 모두 교체한 뒤 `false`로 바꾸면 Draft 표시가 사라집니다. placeholder 문구 자체를 자동 삭제하지는 않습니다.
- `footer`: 하단에 넣을 프로젝트명 또는 저작권 문구

### 영상 예시

실제 파일을 `assets/videos/teaser.mp4`에 넣은 뒤:

```javascript
teaser: {
  src: 'assets/videos/teaser.mp4',
  poster: 'assets/images/teaser.jpg',
  caption: '실제 실험을 설명하는 문장'
},
```

영상은 브라우저가 재생할 수 있는 MP4(H.264 권장) 또는 WebM 파일의 경로/직접 URL을 사용하세요. YouTube 시청 페이지 주소는 영상 파일이 아니므로 `src`에 넣지 말고 `links.video`에 넣으세요. 데모 영상은 무음으로 자동·반복 재생되며, 재생 컨트롤에서 일시정지하거나 소리를 켤 수 있습니다. 브라우저가 자동재생을 제한하면 재생 버튼으로 시작하세요.

데모는 Table, Floor, Wall (high-height), Wall (low-height), Stair 순서로 한 페이지에 세로로 이어집니다. 각 도메인 제목은 `Table domain (x1)`처럼 한 번만 표시하며, `(x1)`은 기본 재생 속도 1배속을 뜻합니다. 현재 `assets/videos/demo_table.mp4`와 `assets/videos/demo_floor.mp4`가 연결되어 있습니다. 두 영상 모두 브라우저 재생과 업로드 용량에 맞춰 H.264 720p로 변환한 사본이며, 전체 재생 길이는 유지했습니다. 루트의 원본 두 개는 보관용이며 `.gitignore`로 업로드에서 제외합니다. 나머지 도메인은 준비 중으로 표시되며, 영상을 추가한 뒤 `content.js`의 해당 항목 `src`에 파일 경로를 입력하면 됩니다. 배포할 때 `assets/videos/`의 영상 파일도 함께 커밋·푸시하세요.

모든 영상은 데스크톱과 모바일에서 가로 전체 폭으로 표시됩니다. 탭이나 페이지 전환 없이 스크롤로 모든 도메인을 볼 수 있으며, 같은 도메인에 영상을 더 넣으면 해당 제목 아래에 이어서 표시됩니다.

### 그림 예시

`method.image`를 `'assets/images/method.png'`로 지정하면 대체 도식이 사라지고 실제 그림이 표시됩니다. 그림을 클릭하면 확대됩니다. PNG, JPG, WebP, SVG가 가능합니다. `alt`에는 그림을 설명하는 텍스트를 넣으세요.

### BibTeX 예시

```javascript
bibtex: `@article{your_key,
  title={실제 논문 제목},
  author={실제 저자 목록},
  year={실제 발표 연도}
}`,
```

복사는 HTTPS 또는 localhost에서 동작합니다. 브라우저가 클립보드 접근을 허용하지 않으면 텍스트가 선택되므로 Command+C / Ctrl+C로 복사하세요.

## 4. GitHub Pages로 공개

1. 본인 또는 연구실 GitHub 계정에 저장소를 만드세요. 예: `paper-project`. GitHub Free로 Pages를 사용하려면 공개 저장소를 선택합니다.
2. 이 폴더의 **내용물**을 저장소 루트에 올리세요. `index.html`이 루트에 있어야 합니다. `.github/`와 `.nojekyll` 같은 숨김 파일도 포함합니다.
3. 기본 브랜치는 `main`으로 사용하세요. 다른 이름이면 `pages.yml`의 `branches` 값을 수정하세요.
4. 저장소 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택하세요.
5. Actions에서 **Deploy project page → Run workflow**를 실행하거나 main에 커밋을 추가하세요.
6. 배포가 성공하면 Settings → Pages에서 실제 공개 주소를 확인하세요.

일반 프로젝트 주소는 `https://계정명.github.io/저장소명/`입니다. 이미 개인 홈페이지가 있어도 프로젝트별 저장소로 함께 운영할 수 있습니다.

Git으로 처음 올릴 때(아래 URL을 실제 저장소 URL로 교체):

```bash
git init
git add .
git commit -m "Create research project page"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

`preview.html`과 README는 배포 파일에 포함하지 않습니다. `.github/workflows/pages.yml`은 페이지 파일과 `assets/`만 배포합니다. 새 CSS/JS 파일이나 별도 최상위 폴더를 추가하면 workflow의 복사 목록도 업데이트하세요.

공개 전에는 초안의 실제 저자 공개 여부와 자료 공개 시점을 팀에서 확인하세요. 익명 심사용 페이지라면 이름·소속·개인 링크를 익명 표기로 바꾸세요. 큰 동영상은 압축하거나 별도 미디어 호스팅의 직접 URL을 사용하세요.

## 5. 공동 편집과 사수님 초대

개인 저장소 기준:

1. **Settings → Collaborators → Add people**로 이동합니다.
2. 요청받은 이메일 `zora07@kaist.ac.kr` 또는 상대의 정확한 GitHub 사용자명을 검색합니다.
3. 표시된 계정이 맞는지 확인하고 초대합니다. 이메일로 찾기 어렵다면 상대의 GitHub 사용자명을 확인하세요.
4. 상대가 초대를 수락하면 함께 편집할 수 있습니다.

연구실 조직 저장소는 Collaborators & teams 메뉴와 조직 권한 정책을 따릅니다. 다른 공동저자도 같은 방식으로 추가할 수 있습니다. 이 파일은 초대 방법을 안내할 뿐, 초대를 보내지는 않았습니다.

여러 사람이 작업할 때는 각자 브랜치를 만들어 Pull Request로 합치는 방식을 권장합니다.

```bash
git clone https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
git switch -c update-results
# VS Code에서 content.js 수정, assets/에 그림·영상 추가
git add content.js assets/
git commit -m "Update experiment results"
git push -u origin update-results
```

이후 GitHub에서 Pull Request를 만들고 검토한 뒤 main으로 합치면 페이지가 배포됩니다. Google Docs처럼 동시에 타이핑하는 편집기는 아니며, Git의 변경 이력과 병합으로 협업합니다.

## 6. VS Code의 Codex / Claude에게 요청하는 예시

> content.js의 논문 제목과 저자 정보를 아래 내용으로 교체해줘. 디자인은 유지해줘.

> assets/videos에 추가한 MP4를 Real-world 실험 갤러리에 넣고 캡션을 달아줘.

> 현재 반응형 레이아웃을 유지하면서 파란색 링크를 남색으로 바꿔줘.

## 공식 안내

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Actions 배포: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Collaborator 초대: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository

## 디자인 참고

- FlashSAC: https://holiday-robot.github.io/FlashSAC/
- FALCON: https://lecar-lab.github.io/falcon-humanoid/
- SoFTA: https://lecar-lab.github.io/SoFTA/
- HOTICE: https://hotice2027.github.io/
