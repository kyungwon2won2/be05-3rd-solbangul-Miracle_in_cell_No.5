package com.hanwha.solbangulrest.post.dto;

import jakarta.validation.constraints.NotBlank;

import com.hanwha.solbangulrest.post.domain.Category;
import com.hanwha.solbangulrest.post.domain.Post;
import com.hanwha.solbangulrest.room.domain.Room;
import com.hanwha.solbangulrest.user.domain.User;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostSaveRequestDto {

	private String loginId;
	private Long roomId;

	@NotBlank(message = "제목을 입력해주세요")
	private String title;

	@NotBlank(message = "내용을 입력해주세요")
	private String content;

	private Boolean anonymousYn;
	private Category category;

	public Post toEntity(User user, Room room) {
		return Post.builder()
			.author(user)
			.room(room)
			.title(title)
			.content(content)
			.anonymousYn(anonymousYn)
			.category(category)
			.build();
	}

	@Builder
	public PostSaveRequestDto(String loginId, Long roomId, String title, String content, Boolean anonymousYn,
		Category category) {
		this.loginId = loginId;
		this.roomId = roomId;
		this.title = title;
		this.content = content;
		this.anonymousYn = anonymousYn;
		this.category = category;
	}
}
