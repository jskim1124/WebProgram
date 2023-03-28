function addProject() {
    const projectName = document.getElementById("name-input").value;
    const projectDate = document.getElementById("date-input").value;
    const projectDescription = document.getElementById("description-input").value;
    
    // 새로운 <tr> 요소를 생성하여 <tbody>에 추가
    const tbody = document.querySelector("table tbody");
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const descriptionCell = newRow.insertCell();
    nameCell.textContent = projectName;
    dateCell.textContent = projectDate;
    descriptionCell.textContent = projectDescription;
    
    // 입력 폼 초기화
    document.getElementById("name-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("description-input").value = "";
  }
  
  // Add Project 버튼 요소 가져오기
  const addProjectButton = document.getElementById("add-project-button");
  
  // Add Project 버튼 클릭 이벤트 추가
  addProjectButton.addEventListener("click", function(event) {
    event.preventDefault(); // 기본 동작 취소
    addProject();
  });