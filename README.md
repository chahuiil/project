# 논문 프로젝트 페이지

HTML, CSS, JavaScript로 구성된 정적 페이지입니다. 별도 설치나 빌드 없이 실행할 수 있습니다.

## 파일 구성

| 파일 | 용도 |
| --- | --- |
| `index.html` | 페이지 구조와 CSS·JavaScript 연결 |
| `content.js` | 논문 정보, 본문, 링크, 미디어 경로 |
| `styles.css` | 글꼴, 색상, 여백, 반응형 배치 |
| `app.js` | 콘텐츠 표시, 영상 재생, 그림 확대, 인용 복사 |
| `assets/` | 게시할 영상, 그림, PDF |
| `preview.html` | CSS·JavaScript가 포함된 미리보기 사본 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리 비활성화 |
| `.gitignore` | 업로드에서 제외할 파일 목록 |

## 로컬에서 보기

`index.html`을 브라우저로 열거나 프로젝트 폴더에서 아래 명령을 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 종료하려면 터미널에서 `Ctrl+C`를 누릅니다.

`preview.html`은 자동 갱신되지 않습니다. 수정 결과는 `index.html`에서 확인합니다. 미리보기 사본을 전달할 때는 영상과 그림이 있는 `assets/`도 함께 전달해야 합니다.

## 논문 정보 수정

`content.js`의 `window.PROJECT`를 편집합니다.

| 항목 | 내용 |
| --- | --- |
| `name` | 프로젝트 이름 또는 약칭 |
| `title` | 논문 제목 |
| `subtitle` | 한 줄 소개 |
| `venue` | 학회, 연도, 발표 상태 |
| `authors` | 저자 이름, 소속 번호, 공동 기여 여부, 개인 페이지 주소 |
| `affiliations` | 소속 목록. 첫 번째 항목의 번호는 1 |
| `links` | `paper`, `arxiv`, `code` 링크. 비어 있으면 Soon 표시 |
| `teaser` | 상단 대표 영상의 `src`, `poster`, `caption` |
| `tldr`, `abstract` | 요약과 초록 |
| `demoGroups` | 도메인별 영상 목록 |
| `method` | 방법 소개, 그림, 캡션, 설명 항목 |
| `results` | 결과 설명, 그림, 캡션 |
| `bibtex` | BibTeX 인용문 |
| `draft` | `false`로 설정하면 상단 Draft 표시 숨김 |
| `footer` | 하단 문구 |

저자 항목의 `affiliation`에는 소속 번호를 문자열로 입력합니다. 여러 소속이면 `'1,2'`처럼 적습니다. `equal: true`인 저자에는 공동 기여 표시가 붙습니다.

여러 줄 문자열은 백틱으로 감쌉니다. 작은따옴표 문자열 안에 작은따옴표를 넣을 때는 `\'`로 적습니다.

## 데모 영상

도메인은 Table, Floor, Wall (high-height), Wall (low-height), Stair 순서로 표시됩니다. 각 도메인은 제목과 영상으로 구성되며, 탭 없이 세로로 이어집니다.

영상을 `assets/videos/`에 넣고 해당 도메인의 `items`를 수정합니다.

```javascript
{
  name: 'Table',
  items: [
    {
      title: 'Table',
      src: 'assets/videos/demo_table.mp4',
      poster: ''
    }
  ]
}
```

- `name`: 화면에 표시할 도메인 이름. 제목은 `Table domain (x1)` 형식으로 표시됩니다.
- `items`: 영상 목록. 항목을 추가하면 같은 도메인 아래에 영상이 이어집니다.
- `title`: 영상의 접근성 이름.
- `src`: 영상 파일 경로 또는 직접 재생 가능한 URL. 빈 문자열이면 준비 중 문구가 표시됩니다.
- `poster`: 재생 전 표시할 이미지 경로. 필요하지 않으면 비워 둡니다.

영상은 페이지 폭에 맞춰 원래 가로세로 비율로 표시됩니다. 기본 재생 속도는 1배속이며, 무음으로 자동·반복 재생됩니다. 영상 컨트롤에서 일시정지하거나 소리를 켤 수 있습니다. 자동재생이 차단된 브라우저에서는 재생 버튼을 누릅니다.

MP4(H.264) 또는 WebM을 사용합니다. YouTube 시청 페이지 주소는 `src`에 사용할 수 없습니다. 파일 경로는 `index.html` 기준이며, 대소문자를 정확히 맞춰야 합니다.

게시할 파일은 `assets/videos/`에 저장합니다. 루트의 `demo_table.mp4`, `demo_floor.mp4`는 `.gitignore`에 등록되어 있으므로 업로드되지 않습니다.

## 대표 영상과 그림

상단 대표 영상은 `teaser`에서 설정합니다.

```javascript
teaser: {
  src: 'assets/videos/teaser.mp4',
  poster: 'assets/images/teaser.jpg',
  caption: '대표 영상 설명'
},
```

방법·결과 그림은 `method.image`, `results.image`에 경로를 입력합니다. `alt`에는 그림 설명을, `caption`에는 캡션을 적습니다. PNG, JPG, WebP, SVG를 사용할 수 있으며, 그림을 클릭하면 확대됩니다.

## 인용문

`bibtex`에 인용문을 입력합니다.

```javascript
bibtex: `@article{paper_key,
  title={Paper title},
  author={Author names},
  year={2026}
}`,
```

인용문이 비어 있으면 복사 버튼은 비활성화됩니다. 클립보드 접근이 허용되지 않으면 인용문이 선택되므로 `Command+C` 또는 `Ctrl+C`로 복사합니다.

## 스타일과 캐시

글꼴, 색상, 폭, 여백은 `styles.css`에서 수정합니다. 주요 색상은 파일 상단의 `:root`, 본문 폭은 `.wrap`, 도메인 간격은 `.demo-domains`에 정의되어 있습니다.

CSS·JavaScript를 수정할 때는 `index.html`에서 해당 파일 주소의 `?v=` 값도 변경합니다. 새 버전 주소를 사용해야 브라우저에 남은 이전 파일 대신 수정한 파일을 불러옵니다.

```html
<link rel="stylesheet" href="styles.css?v=2">
<script src="content.js?v=2" defer></script>
<script src="app.js?v=2" defer></script>
```

## GitHub Pages 배포

1. `index.html`과 나머지 파일을 저장소 루트에 둡니다.
2. 저장소의 **Settings → Pages**에서 Source를 **Deploy from a branch**로 설정합니다.
3. 브랜치를 **main**, 폴더를 **/ (root)**로 선택하고 저장합니다.
4. 변경한 페이지 파일과 `assets/`의 미디어 파일을 커밋·푸시합니다.
5. **Actions**에서 `pages build and deployment`가 완료됐는지 확인합니다.

```bash
git add index.html content.js app.js styles.css preview.html README.md assets/ .gitignore .nojekyll
git commit -m "Update project page"
git push origin main
```

페이지 주소는 `https://계정명.github.io/저장소명/`입니다. 별도의 workflow 파일은 필요하지 않습니다.

[GitHub Pages 배포 설정 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
