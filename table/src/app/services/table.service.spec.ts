import { TestBed, inject } from '@angular/core/testing';
import { TableService } from './table.service';
import { HttpClientModule } from '@angular/common/http';

describe('TableService', () => {
  let service: TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TableService]
    });
    service = TestBed.inject(TableService);
  });

  it('should be created', inject([TableService], (service: TableService) => {
    expect(service).toBeTruthy();
  }));
});
