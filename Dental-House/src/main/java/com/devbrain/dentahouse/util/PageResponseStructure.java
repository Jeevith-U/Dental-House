package com.devbrain.dentahouse.util;

import lombok.Getter;

@Getter
public class PageResponseStructure<T> {
    private T list;
    private int page;
    private long totalPages;
    private long totalAvailableRecords;

    public PageResponseStructure<T> setList(T list) {
        this.list = list;
        return this;
    }

    public PageResponseStructure<T> setPage(int page) {
        this.page = page;
        return this;
    }

    public PageResponseStructure<T> setTotalPages(long totalPages) {
        this.totalPages = totalPages;
        return this;
    }

    public PageResponseStructure<T> setTotalAvailableRecords(long totalAvailableRecords) {
        this.totalAvailableRecords = totalAvailableRecords;
        return this;
    }
}
