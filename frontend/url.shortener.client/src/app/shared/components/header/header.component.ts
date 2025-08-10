// src/app/shared/components/header/header.component.ts
import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavigationItem, User } from '@data/url-shortener.intefaces';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Inject dependencies using the modern inject() function
  private readonly router = inject(Router);

  // Modern Angular signals for reactive state management
  readonly title = signal('URL Shortener');
  readonly isMobileMenuOpen = signal(false);
  readonly isLoggedIn = signal(false);
  readonly currentUser = signal<User | null>(null);

  // Computed signals for derived state
  readonly showNavigation = computed(() => true); // Could be based on route or user role
  readonly username = computed(() => this.currentUser()?.username);
  readonly userInitials = computed(() => {
    const user = this.currentUser();
    if (!user) return '';
    return user.username
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  });

  /**
   * Navigation items for the header - using readonly for immutability
   */
  readonly navigationItems: readonly NavigationItem[] = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Shorten', route: '/shorten', icon: 'link' },
    { label: 'Analytics', route: '/analytics', icon: 'chart' },
    { label: 'History', route: '/history', icon: 'history' }
  ] as const;

  /**
   * Toggle mobile menu visibility using signals
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(isOpen => !isOpen);
  }

  /**
   * Handle login action - in a real app, this would integrate with an auth service
   */
  async handleLogin(): Promise<void> {
    try {
      // Simulate login API call
      await this.simulateLogin();

      // Update state with signals
      this.isLoggedIn.set(true);
      this.currentUser.set({
        id: '1',
        username: 'John Doe',
        email: 'john.doe@example.com'
      });

      // Navigate to dashboard or home
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Login failed:', error);
      // In a real app, show error notification
    }
  }

  /**
   * Handle logout action
   */
  async handleLogout(): Promise<void> {
    try {
      // Simulate logout API call
      await this.simulateLogout();

      // Clear state with signals
      this.isLoggedIn.set(false);
      this.currentUser.set(null);

      // Navigate to home
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  /**
   * Close mobile menu when navigation item is clicked
   */
  onNavItemClick(): void {
    this.isMobileMenuOpen.set(false);
  }

  // Private helper methods

  /**
   * Simulate login API call - replace with real auth service
   */
  private async simulateLogin(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000); // Simulate network delay
    });
  }

  /**
   * Simulate logout API call - replace with real auth service
   */
  private async simulateLogout(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500); // Simulate network delay
    });
  }
}
